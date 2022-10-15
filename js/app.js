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
const tonicProjectModal = document.getElementById('modal-div');
const tonicProject = document.getElementById('tonic-project-btn');
const multipostProject = document.getElementById('multipost-project-btn');
const tonicProject2 = document.getElementById('tonic-project-2-btn');
const multipostProject2 = document.getElementById('multipost-project-2-btn');
const errorDiv = document.getElementById('error-output');
const form = document.getElementById('contact_form');

const portfolio = document.getElementById('portfolio');

function myWork1() {
  const myworksDiv = document.createElement('div');
  myworksDiv.setAttribute('class', 'my-works'); //<div class="my-works">
  //figure section
  const figImg = document.createElement('figure');
  figImg.setAttribute('class','img-wide-screen'); //<figure class="img-wide-screen">
  const imgMainS = document.createElement('img');
  imgMainS.setAttribute('class', 'works-image small-screen-view');
  imgMainS.src = 'images/tonic-project.png';
  imgMainS.style.width = '100%';//<img src="images/tonic-project.png" class="works-image small-screen-view " alt="Tonic App Screenshot" width="100%">
  const imgMainW = document.createElement('img');
  imgMainW.setAttribute('class', 'works-image wide-screen-view');
  imgMainW.src = 'images/Snapshoot Portfolio.png';//<img src="images/Snapshoot Portfolio.png" alt="Tonic project image Screenshot" class="wide-screen-view">
  figImg.appendChild(imgMainS);
  figImg.appendChild(imgMainW);
  myworksDiv.appendChild(figImg);
  //header titles
  const headerTitles = document.createElement('div');
  headerTitles.setAttribute('class','wider-screen-project-definition');//<div class="wider-screen-project-definition">
  const headerTitlesWorks = document.createElement('div');
  headerTitlesWorks.setAttribute('class','works-description');//<div class="works-description">
  const h3 = document.createElement('h3');
  h3.setAttribute('class', 'my-works-project-title');
  h3.innerHTML += 'Tonic';//<h3 class="my-works-project-title">Tonic</h3>
  headerTitlesWorks.appendChild(h3);
  const ul = document.createElement('ul');
  ul.setAttribute('class','works-headers');//<ul class="works-headers">
  const li1 = document.createElement('li');
  li1.setAttribute('class','title-header');
  li1.innerHTML += 'CANOPY';//<li class="title-header">CANOPY</li>
  const li2 = document.createElement('li');
  li2.innerHTML += `<img src="images/works-dot.PNG" class="dot-separator" alt="Dot separator">`;//<li><img src="images/works-dot.PNG" class="dot-separator" alt="Dot separator"></li>
  const li3 = document.createElement('li');
  li3.setAttribute('class','title-header-general');
  li3.innerHTML += 'Back End Dev';//<li class="title-header-general">Back End Dev</li>
  const li4 = document.createElement('li');
  li4.innerHTML += `<img src="images/works-dot.PNG" class="dot-separator" alt="Dot separator">`;//<li><img src="images/works-dot.PNG" class="dot-separator" alt="Dot separator"></li>
  const li5 = document.createElement('li');
  li5.setAttribute('class','title-header-general');
  li5.innerHTML += '2015';//<li class="title-header-general">2015</li>
  ul.append(li1,li2,li3,li4,li5); 
  headerTitlesWorks.appendChild(ul);
  const para = documen.createElement('p');
  para.setAttribute('class','project-description');//<p class="project-description">
  para.innerHTML += 'A daily selection of privately personalized reads; no accounts or sign-ups required.'; 
  headerTitlesWorks.appendChild(para);
  headerTitles.appendChild(headerTitlesWorks)
  const section = document.createElement('section');
  section.setAttribute('class','project-languages');//<section class="project-languages">
  const sectionUl = document.createElement('ul');
  sectionUl.setAttribute('my-work-languages');//<ul class="my-work-languages">
  const sectionUlLi1 = document.createElement('li');
  sectionUlLi1.setAttribute('class','coding-languages');
  sectionUlLi1.innerHTML += 'html';//<li class="coding-languages">html</li>
  const sectionUlLi2 = document.createElement('li');
  sectionUlLi2.setAttribute('class','coding-languages');
  sectionUlLi2.innerHTML += 'css';//<li class="coding-languages">css</li>
  const sectionUlLi3 = document.createElement('li');
  sectionUlLi3.setAttribute('class','coding-languages');
  sectionUlLi3.innerHTML += 'css';//<li class="coding-languages">javascript</li>
  sectionUl.append(sectionUlLi1, sectionUlLi2, sectionUlLi3);
  section.appendChild(sectionUl);
  headerTitles.appendChild(section);
  const sectionProject = document.createElement('section');
  sectionProject.setAttribute('class','project-more');//<section class="project-more">
  const sectionProjectBtn = document.createElement('button');
  sectionProjectBtn.setAttribute('class', 'works-see-more');
  sectionProjectBtn.id = 'tonic-project-btn';
  sectionProjectBtn.type = 'button'; //<button class="works-see-more" type="button" id="tonic-project-btn">See Project</button>
  sectionProject.appendChild(sectionProjectBtn);
  headerTitles.appendChild(sectionProject);
  myworksDiv.appendChild(headerTitles);

  alert('Yes');
  portfolio.innerHTML += myworksDiv;

  portfolio.appendChild(myworksDiv);

  
}



myWork1();

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

const projectData = {
  tonicProjectdata: {
    name: 'Tonic',
    description: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting remaining essent', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea'],
    title: 'CANOPY',
    category: 'Back End Dev',
    languages: ['html', 'css', 'javascript'],
    images: ['tonic-project.png', 'Snapshoot Portfolio.png'],
  },
  tonicProject2data: {
    name: 'Tonic',
    description: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting remaining essent', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea'],
    title: 'FACEBOOK',
    category: 'Back End Dev',
    languages: ['html', 'css', 'javascript'],
    images: ['tonic-2-project.jpg', 'Snapshoot-Portfolio-3.png'],
  },
  multipostProjectData: {
    name: 'Multi-Post Stories',
    description: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting remaining essent', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea'],
    title: 'FACEBOOK',
    category: 'Full stack',
    languages: ['html', 'css', 'javascript'],
    images: ['multi-post-stories-project.jpg', 'Snapshoot-Portfolio-2.png'],
  },
  multipostProject2Data: {
    name: 'Multi-Post Stories',
    description: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting remaining essent', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea'],
    title: 'CANOPY',
    category: 'Back End Dev',
    languages: ['html', 'css', 'ruby on rails'],
    images: ['tonic-2-project.jpg', 'Snapshoot-Portfolio-3.png'],
  },
};

function modalPopup(data) {
  menuBody.style.overflow = 'hidden';
  tonicProjectModal.style.display = 'block';
  tonicProjectModal.innerHTML += `
    <div class='tonic-project-modal-content' id='tonic-project-modal'>
    <div class='tonic-project-content'>
        <div class='tonic-project-modal-header'>
            <h2 class='tonic-h2-modal'>${data[0]}</h2>
            <div class='tonic-project-close' onClick="document.getElementById('modal-div').style.display = 'none';
            document.getElementById('mobile-menu-body').style.overflow ='visible';">&times;</div>
        </div>      
        <ul class='works-headers tonic-project-modal-header-techs'>
            <li class='title-header' style='margin-right: 50px;'>${data[1]}</li>
            <li><img src='images/works-dot.PNG' style='margin-right: 10px;' class='dot-separator' alt='Dot separator'></li>
            <li class='title-header-general'  style='margin-right: 23px;'>${data[2]}</li>
            <li><img src='images/works-dot.PNG' style='margin-right: 13px;' class='dot-separator' alt='Dot separator'></li>
            <li class='title-header-general'>2015</li>
        </ul>
        <div class='tonic-project-modal-body'>
            <figure class='img-wide-screen-modal'>
                <img src='images/${data[5][0]}' class='works-image style-image small-screen-view' alt='Tonic App Screenshot'>
                <img src='images/${data[5][1]}' class='wide-screen-view-modal modal-pic-full' alt='Tonic project image Screenshot'>
            </figure>
        </div>
        <section class='project-aside'>
            <div class='project-aside-description'>
                <p class='project-description-tonic small-screen-view-des'>
                 ${data[3][0]}
                </p>
                <p class='project-description-tonic full-screen-view-des'>
                ${data[3][1]}
                </p>
            </div>
            <div class='project-aside-languages'>
                <section class='project-languages-tonic'>
                    <ul class='my-work-languages-tonic' id='language-list'>
                      <li class='coding-languages'>${data[4][0]}</li>
                      <li class='coding-languages'>${data[4][1]}</li>
                      <li class='coding-languages'>${data[4][2]}</li>
                    </ul>
                </section>
                <div class='tonic-project-modal-footer'>
                    <button class='tonic-see-live'>See live <img class='tonic-see-live-img' src='./images/live.png' alt='See Live Project'></button>
                    <button class='tonic-see-live'>See Source <img class='tonic-see-live-img' src='./images/cat.png' alt='See source on Github'></button>
                </div>
            </div>
        </section>
    </div>
  </div>
  `;
}

tonicProject.addEventListener('click', () => {
  const data = [
    projectData.tonicProjectdata.name,
    projectData.tonicProjectdata.title,
    projectData.tonicProjectdata.category,
    projectData.tonicProjectdata.description,
    projectData.tonicProjectdata.languages,
    projectData.tonicProjectdata.images,
  ];
  modalPopup(data);
});

tonicProject2.addEventListener('click', () => {
  const data = [
    projectData.tonicProject2data.name,
    projectData.tonicProject2data.title,
    projectData.tonicProject2data.category,
    projectData.tonicProject2data.description,
    projectData.tonicProject2data.languages,
    projectData.tonicProject2data.images,
  ];
  modalPopup(data);
});

multipostProject.addEventListener('click', () => {
  const data = [
    projectData.multipostProjectData.name,
    projectData.multipostProjectData.title,
    projectData.multipostProjectData.category,
    projectData.multipostProjectData.description,
    projectData.multipostProjectData.languages,
    projectData.multipostProjectData.images,
  ];
  modalPopup(data);
});

multipostProject2.addEventListener('click', () => {
  const data = [
    projectData.multipostProject2Data.name,
    projectData.multipostProject2Data.title,
    projectData.multipostProject2Data.category,
    projectData.multipostProject2Data.description,
    projectData.multipostProject2Data.languages,
    projectData.multipostProject2Data.images,
  ];
  modalPopup(data);
});

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

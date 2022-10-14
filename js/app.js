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
    languages: ['html','css','javascript'], 
    images:['tonic-2-project.jpg','Snapshoot-Portfolio-3.png']
  },
  multipostProjectData: {
    name: 'Multi-Post Stories', 
    description: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting remaining essent', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea'],
    title: 'FACEBOOK', 
    category: 'Full stack', 
    languages: ['html','css','javascript'], 
    images:['multi-post-stories-project.jpg','Snapshoot-Portfolio-2.png']
  },
  multipostProject2Data: {
    name: 'Multi-Post Stories', 
    description: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting remaining essent', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea'],
    title: 'CANOPY', 
    category: 'Back End Dev', 
    languages: ['html','css', 'ruby on rails'], 
    images:['tonic-2-project.jpg','Snapshoot-Portfolio-3.png']
  }
};

function modalPopup(data) {
  menuBody.style.overflow = 'hidden';
  tonicProjectModal.style.display = 'block';
  tonicProjectModal.innerHTML += `
    <div class='tonic-project-modal-content' id='tonic-project-modal'>
    <div class='tonic-project-content'>
        <div class='tonic-project-modal-header'>
            <h2 class='tonic-h2'>${data[0]}</h2>
            <span class='tonic-project-close' onClick="document.getElementById('modal-div').style.display = 'none';
            document.getElementById('mobile-menu-body').style.overflow ='visible';">&times;</span>
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
                <img src='images/${data[5][1]}' class='wide-screen-view modal-pic-full' alt='Tonic project image Screenshot'>
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
                    <button class='tonic-see-live'><span class='tonic-see-live-text'>See live</span> <img class='tonic-see-live-img' src='./images/live.JPG' alt='See source on Github' srcset=''></button>
                    <button class='tonic-see-live'><span class='tonic-see-live-text'>See Source</span> <img class='tonic-see-live-img' src='./images/cat.png' alt='See source on Github' srcset=''></button>
                </div>
            </div>
        </section>
    </div>
  </div>
  `;
}

tonicProject.addEventListener('click', () => {
  let data = [
    projectData.tonicProjectdata.name, 
    projectData.tonicProjectdata.title,
    projectData.tonicProjectdata.category,
    projectData.tonicProjectdata.description,
    projectData.tonicProjectdata.languages,
    projectData.tonicProjectdata.images
  ];
  modalPopup(data);
});

tonicProject2.addEventListener('click', () => {
  let data = [
    projectData.tonicProject2data.name, 
    projectData.tonicProject2data.title,
    projectData.tonicProject2data.category,
    projectData.tonicProject2data.description,
    projectData.tonicProject2data.languages,
    projectData.tonicProject2data.images
  ];
  modalPopup(data);
});

multipostProject.addEventListener('click', () => {
  let data = [
    projectData.multipostProjectData.name, 
    projectData.multipostProjectData.title,
    projectData.multipostProjectData.category,
    projectData.multipostProjectData.description,
    projectData.multipostProjectData.languages,
    projectData.multipostProjectData.images
  ];
  modalPopup(data);
});

multipostProject2.addEventListener('click', () => {
  let data = [
    projectData.multipostProject2Data.name, 
    projectData.multipostProject2Data.title,
    projectData.multipostProject2Data.category,
    projectData.multipostProject2Data.description,
    projectData.multipostProject2Data.languages,
    projectData.multipostProject2Data.images
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

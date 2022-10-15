
const myPortfolioData = {
    tonicProj1: {
      name: 'Tonic',
      title: 'CANOPY',
      technology: 'Back End Dev',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      img1: 'images/Snapshoot Portfolio.png',
      img2: 'images/tonic-project.png',
      technologies: ['html', 'css', 'javascript'],
    },
  };
  
  function myPortifolio(portfolioData) {
    const myworksDiv = document.createElement('div');
    myworksDiv.setAttribute('class', 'my-works'); //<div class="my-works">
    //figure section
    const figImg = document.createElement('figure');
    figImg.setAttribute('class','img-wide-screen'); //<figure class="img-wide-screen">
    const imgMainS = document.createElement('img');
    imgMainS.setAttribute('class', 'works-image small-screen-view');
    imgMainS.src = portfolioData[0];
    imgMainS.style.width = '100%';//<img src="images/tonic-project.png" class="works-image small-screen-view " alt="Tonic App Screenshot" width="100%">
    const imgMainW = document.createElement('img');
    imgMainW.setAttribute('class', 'works-image wide-screen-view');
    imgMainW.src = portfolioData[1];//<img src="images/Snapshoot Portfolio.png" alt="Tonic project image Screenshot" class="wide-screen-view">
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
    h3.innerHTML += portfolioData[2];//<h3 class="my-works-project-title">Tonic</h3>
    headerTitlesWorks.appendChild(h3);
    const ul = document.createElement('ul');
    ul.setAttribute('class','works-headers');//<ul class="works-headers">
    const li1 = document.createElement('li');
    li1.setAttribute('class','title-header');
    li1.innerHTML += portfolioData[3];//<li class="title-header">CANOPY</li>
    const li2 = document.createElement('li');
    li2.innerHTML += `<img src="images/works-dot.PNG" class="dot-separator" alt="Dot separator">`;//<li><img src="images/works-dot.PNG" class="dot-separator" alt="Dot separator"></li>
    const li3 = document.createElement('li');
    li3.setAttribute('class','title-header-general');
    li3.innerHTML += portfolioData[4];//<li class="title-header-general">Back End Dev</li>
    const li4 = document.createElement('li');
    li4.innerHTML += `<img src="images/works-dot.PNG" class="dot-separator" alt="Dot separator">`;//<li><img src="images/works-dot.PNG" class="dot-separator" alt="Dot separator"></li>
    const li5 = document.createElement('li');
    li5.setAttribute('class','title-header-general');
    li5.innerHTML += '2015';//<li class="title-header-general">2015</li>
    ul.append(li1,li2,li3,li4,li5); 
    headerTitlesWorks.appendChild(ul);
    const para = document.createElement('p');
    para.setAttribute('class','project-description');//<p class="project-description">
    para.innerHTML += portfolioData[5]; 
    headerTitlesWorks.appendChild(para);
    headerTitles.appendChild(headerTitlesWorks);
    const section = document.createElement('section');
    section.setAttribute('class','project-languages');//<section class="project-languages">
    const sectionUl = document.createElement('ul');
    sectionUl.setAttribute('class','my-work-languages');//<ul class="my-work-languages">
    const sectionUlLi1 = document.createElement('li');
    sectionUlLi1.setAttribute('class','coding-languages');
    sectionUlLi1.innerHTML += portfolioData[6];//<li class="coding-languages">html</li>
    const sectionUlLi2 = document.createElement('li');
    sectionUlLi2.setAttribute('class','coding-languages');
    sectionUlLi2.innerHTML += portfolioData[7];//<li class="coding-languages">css</li>
    const sectionUlLi3 = document.createElement('li');
    sectionUlLi3.setAttribute('class','coding-languages');
    sectionUlLi3.innerHTML += portfolioData[8];//<li class="coding-languages">javascript</li>
    sectionUl.append(sectionUlLi1, sectionUlLi2, sectionUlLi3);
    section.appendChild(sectionUl);
    headerTitles.appendChild(section);
    const sectionProject = document.createElement('section');
    sectionProject.setAttribute('class','project-more');//<section class="project-more">
    const sectionProjectBtn = document.createElement('button');
    sectionProjectBtn.setAttribute('class', 'works-see-more');
    sectionProjectBtn.classList.add('testfiring'); //<button class="works-see-more" type="button" id="tonic-project-btn">See Project</button>
    sectionProjectBtn.innerHTML += 'See Project';
    sectionProject.appendChild(sectionProjectBtn);
    headerTitles.appendChild(sectionProject);
    myworksDiv.appendChild(headerTitles);
    document.getElementById('portfolio').appendChild(myworksDiv); 
  }


const proData = [
    myPortfolioData.tonicProj1.img1,
    myPortfolioData.tonicProj1.img2,
    myPortfolioData.tonicProj1.name,
    myPortfolioData.tonicProj1.title,
    myPortfolioData.tonicProj1.technology,
    myPortfolioData.tonicProj1.description,
    myPortfolioData.tonicProj1.technologies[0],
    myPortfolioData.tonicProj1.technologies[1],
    myPortfolioData.tonicProj1.technologies[2],
];
myPortifolio(proData);
 
  function modalPopup(){
    alert("hello");
  }
  /*
const tonicProject = document.getElementById('tonic-project-btn');

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
*/
const container = document.querySelector('#portfolio');
container.addEventListener('click', function (e) {
    // But only alert for elements that have an alert-button class
    if (e.target.classList.contains('testfiring')) {
        modalPopup();
    }
});


//document.querySelector('testfiring').addEventListener('click', testFire);
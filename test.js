
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
}
// stockage des informations de chaque projet dans un objet
const projectsInfo = {
  project1: {
      title: "CompanyPoll",
      description: "Company Poll is a voting application designed to facilitate decision-making for businesses through a simple and streamlined interface. Each vote is encrypted using the El-Gamal algorithm. The Shamir secret sharing technique is also used to secure data. To ensure the portability and scalability of the application, Docker is used to create isolated containers that can be deployed on different platforms. Finally, to confirm the confidentiality and integrity of the data, the Zero Knowledge Proof is implemented in the application. This technique allows verifying that a person has a certain knowledge without disclosing that knowledge itself.",
      imgSrc: "ressources/Project/CompanyPoll1.png"
  },
  project2: {
      title: "Votee",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" +
      "Lorem ipsum dolor sit amet, consectasasasaetur aaea adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      imgSrc: "ressources/Project/Votee1.png"
  },
  project3: {
    title: "TimeBomb",
    description: "Description du projet 3",
    imgSrc: "ressources/startimg.png"
  },
  project4: {
    title: "Aventuriers du rail",
    description: "Description du projet 4",
    imgSrc: "ressources/Project/AventuriersDuRail1.png"
  },
  project5: {
    title: "DoubleSnake",
    description: "Description du projet 5",
    imgSrc: "ressources/Project/DoubleSnake.png"
},
  // ajouter d'autres projets si nécessaire
};

const projects = document.querySelectorAll('.project');

// boucle à travers chaque projet
projects.forEach(project => {
  const projectInfo = project.querySelector('.project-info');
  const projectTitle = projectInfo.querySelector('.project-title');
  const projectDesc = projectInfo.querySelector('.project-description');
  const projectImg = projectInfo.querySelector('.project-img');
  const nav = document.querySelector('header');

  project.addEventListener('click', () => {
      const projectID = project.id; 
      const info = projectsInfo[projectID]; 

      projectTitle.textContent = info.title;
      projectDesc.textContent = info.description;
      projectImg.src = info.imgSrc;

      projectInfo.classList.add('active'); 
      project.querySelector('.project-overlay').classList.add('active');

      document.body.style.overflowY = 'hidden';
      nav.style.display = 'none';
  });


  const closeBtn = projectInfo.querySelector('.close-btn');
  closeBtn.addEventListener('click', (e) => {
      e.stopPropagation(); 
      projectInfo.classList.remove('active'); 
      project.querySelector('.project-overlay').classList.remove('active');
      
      document.body.style.overflowY = 'visible';
      nav.style.display = 'flex';
  });
});


const projects2 = document.querySelectorAll('.projectd');

projects2.forEach(project => {
  const projectInfo = project.querySelector('.project-info');
  const projectTitle = projectInfo.querySelector('.project-title');
  const projectDesc = projectInfo.querySelector('.project-description');
  const projectImg = projectInfo.querySelector('.project-img');
  const nav = document.querySelector('header');

  project.addEventListener('click', () => {
      const projectID = project.id;
      const info = projectsInfo[projectID];

      projectTitle.textContent = info.title;
      projectDesc.textContent = info.description;
      projectImg.src = info.imgSrc;

      projectInfo.classList.add('active');
      project.querySelector('.project-overlay').classList.add('active');

      document.body.style.overflowY = 'hidden';
      nav.style.display = 'none';
  });

  const closeBtn = projectInfo.querySelector('.close-btn');
  closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      projectInfo.classList.remove('active');
      project.querySelector('.project-overlay').classList.remove('active');

      document.body.style.overflowY = 'visible';
      nav.style.display = 'flex';
  });
});

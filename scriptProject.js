// stockage des informations de chaque projet dans un objet
const projectsInfo = {
  project1: {
      title: "CompanyPoll",
      description: "Company Poll is a voting application designed to facilitate decision-making for businesses through a simple and streamlined interface. Each vote is encrypted using the El-Gamal algorithm. The Shamir secret sharing technique is also used to secure data. To ensure the portability and scalability of the application, Docker is used to create isolated containers that can be deployed on different platforms. Finally, to confirm the confidentiality and integrity of the data, the Zero Knowledge Proof is implemented in the application. This technique allows verifying that a person has a certain knowledge without disclosing that knowledge itself.",
      imgSrc: "ressources/Project/CompanyPoll1.png"
  },
  project2: {
      title: "Votee",
      description: "A web application designed to facilitate collective decision making by allowing users to write their opinions on a variety of open questions. Votee offers great flexibility to question creators, who can customise questions to suit their needs and preferences. Permission management and user interface features have been carefully developed to ensure a smooth and intuitive experience. The project involved the use of PHP with the MVC (Model, View, Controller) framework, Javascript and SQL, including PL/SQL, Triggers and Views.",
      imgSrc: "ressources/Project/Votee1.png"
  },
  project3: {
    title: "TimeBomb",
    description: "A 2D platformer designed for two-player local play. Developed in only 32 hours with Unity and featuring an elegant design created on Aseprite, it offers fast and efficient gameplay. The goal of the game is to avoid ending up with the bomb at the end of the time limit. To make the game even more exciting, various features have been added, such as random weather events, varied maps, and custom items. All of these elements add an extra dimension to the gameplay, allowing players to fully enjoy the game and have fun. TimeBomb is a unique blend of competition and time-based adventure, perfect for a fun time with friends. This game won two prestigious awards at the Code Game Jam, 7th edition [2023]. It was chosen by the public as the winner of the Student Prize and by the professionals as the winner of the 'Coup de Cœur Prize'. This double distinction testifies to the exceptional quality of TimeBomb, which seduced both the public and experts in the field.",
    imgSrc: "ressources/Project/CGJ1.png"
  },
  project4: {
    title: "Ticket to Ride",
    description: "A digital adaptation of the famous board game of the same name created by Alan R. Moon in 2004. Developed in Java & JavaFx, using mathematical concepts such as Graph Theory, it allows multiple players to play locally. Each player must collect cards in order to build railways across Europe, while trying to connect cities together using as few cards as possible. Secret destination routes can also be completed to score extra points. Ticket to Ride is an easy-to-learn strategy game that offers a fun experience for players of all levels.",
    imgSrc: "ressources/Project/AventuriersDuRail1.png"
  },
  project5: {
    title: "DoubleSnake",
    description: "Inspired by the very famous game Snake developed by Alexey Pajitnov in 1997. This project is a two player game developed in C++ using the SDL2 library. Unlike the original game, the objective of this game is to eliminate the enemy snake by making it collide with its own body. To do this, each player will have to control their own snake and eat the food that randomly appears on the screen in order to gain an advantage over their opponent. DoubleSnake is a personal project developed in collaboration with Quentin Mélotte, an outstanding developer.",
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

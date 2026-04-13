
/*
===============
    HEADER
===============*/ 

//Mobile menu
const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('#navbar');
const closeMenu = document.querySelector(".nav__close");

const links = document.querySelectorAll('.nav__link');


menuBtn.addEventListener('click', () => {

        navbar.classList.toggle('is-open');
});

closeMenu.addEventListener("click", () => {
    navbar.classList.remove("is-open");
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('is-open');        
    });
});



const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        if(section.classList.contains("visible")) return;

        const rect = section.getBoundingClientRect();

        const triggerPoint = window.innerHeight - (rect.height * 0.20);

        if(rect.top < triggerPoint) {
            section.classList.add("visible");
        }
    });
});

/*
// =====================
// PROJECTS SECTION
// =====================*/

// const projects = ["My Portfolio", "Voting System", "Banking System", "Weather App"];

// const projectTabsContainer = document.getElementById("project-tabs-container");

// const projectPanels = document.querySelectorAll(".project-panel");

// const projectsContainer = document.querySelector(".projects-container");

// function createProjectTabs() {

//     projects.forEach(project => {
//         const tab = document.createElement("button");
//         tab.classList.add("project-tab");
//         tab.textContent = project;
//         projectTabsContainer.appendChild(tab);
//     });
// }

// createProjectTabs();

// const projectTabs = document.querySelectorAll(".project-tab");



// projectTabs.forEach(tab => {
//     tab.addEventListener("click", () => {

//     projectPanels.forEach(panel => {
//         panel.classList.remove("display-panel");
//     });

//     projectPanels.forEach(panel => {
//                 if(panel.dataset.project === tab.textContent) {
//                     panel.classList.add("display-panel");
//                 }

//         });
// });
// });

// if(projectTabs.length > 0) {
//     projectTabs[0].click();
// }











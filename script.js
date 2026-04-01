
/*
===============
    HEADER
===============*/ 

//Mobile menu
const hamburger = document.getElementById('btn');
const navBar = document.getElementById('navbar');

const navLinks = document.querySelectorAll('.navbar a');

const mainContent = document.querySelector('main');

hamburger.addEventListener(
    'click', () => {
        navBar.classList.toggle('show-menu');
        hamburger.classList.toggle('close');
    }
);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.remove('show-menu');
        hamburger.classList.remove('close');
    });
});

navBar.addEventListener('mouseleave', function() {
    
     navBar.classList.remove('show-menu');
    hamburger.classList.remove('close');
    textMenu.classList.remove('show-menu-text');
});

const ul = document.querySelector('.header')
document.addEventListener('click', function() {
    if(!ul.contains(event.target)) {
       navBar.classList.remove('show-menu');
       hamburger.classList.remove('close');
    } 
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
=====================
CERTIFICATION SECTION
=====================*/

//carousel for certificates
const slideContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slides img");

let slideCounter = 0;


// Right arrow logic for carousel
const rightArrow = document.querySelector(".arrow.right");

rightArrow.addEventListener('click', () => {
    slideCounter++;

    if(slideCounter > slides.length - 1) {
        slideCounter = 0;
    }

    slideContainer.style.transform = `translateX(-${slideCounter * 100}%)`;

});

// Left arrow logic for carousel

const leftArrow = document.querySelector(".arrow.left");

leftArrow.addEventListener('click', () => {
    slideCounter--;

    if(slideCounter < 0) {
        slideCounter = slides.length - 1;
    }

slideContainer.style.transform = `translateX( -${slideCounter * 100}%)`;
console.log(slideCounter);
})
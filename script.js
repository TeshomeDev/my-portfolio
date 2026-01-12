
/*
===============
    HEADER
===============*/ 

//Mobile menu
const hamburger = document.getElementById('btn');
const navBar = document.getElementById('navbar');

const navLinks = document.querySelectorAll('.navbar a');

const textMenu = document.querySelector('.menu-text');

const mainContent = document.querySelector('main');

hamburger.addEventListener(
    'click', () => {
        navBar.classList.toggle('show-menu');
        hamburger.classList.toggle('close');
        textMenu.classList.toggle('show-menu-text');
    }
);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navBar.classList.remove('show-menu');
        hamburger.classList.remove('close');
        textMenu.classList.remove('show-menu-text');
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
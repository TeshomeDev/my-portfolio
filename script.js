const hamburger = document.getElementById('btn');
const navBar = document.getElementById('navbar');

const navLinks = document.querySelectorAll('.navbar a');

const textMenu = document.querySelector('.menu-text');

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



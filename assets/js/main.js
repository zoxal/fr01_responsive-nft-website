const d = document;
/*=============== SHOW MENU ===============*/

const navMenu = d.getElementById('nav-menu'),
    navToggle = d.getElementById('nav-toggle'),
    navClose = d.getElementById('nav-close');

const openMenu = () => navMenu.classList.add('show_menu');
const hideMenu = () => navMenu.classList.remove('show_menu');

if (navToggle) {
    navToggle.addEventListener('click', openMenu)
}

if (navClose) {
    navClose.addEventListener('click', hideMenu)
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = d.querySelectorAll('.nav__link');
navLink.forEach(e => e.addEventListener('click', hideMenu));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = d.getElementById('header');

window.addEventListener('scroll', () => {
    window.scrollY >= 50 
    ? header.classList.add('header-bg')
    : header.classList.remove('header-bg')
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2500,
})
sr.reveal(`.home__images`, {distance: '120px', delay: 400})
sr.reveal(`.home__title`, {delay: 400})
sr.reveal(`.home__description`, {delay: 1200})
sr.reveal(`.home__button`, {delay: 1400})
sr.reveal(`.home__footer`, {delay: 1600})
sr.reveal(`.home__data div`, {origin: 'right', interval: 100, delay: 1800})
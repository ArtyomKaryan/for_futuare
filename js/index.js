document.addEventListener('DOMContentLoaded', function () {
    // About հղման սահուն անցում
    const aboutLink = document.getElementById('about-link');
    const aboutSection = document.getElementById('about');

    if (aboutLink && aboutSection) {
        aboutLink.addEventListener('click', function (event) {
            event.preventDefault();
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // About հղման սահուն անցում
    const aboutLink = document.getElementById('calc');
    const aboutSection = document.getElementById('calc_res');

    if (aboutLink && aboutSection) {
        aboutLink.addEventListener('click', function (event) {
            event.preventDefault();
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const finDeftLink = document.getElementById('fin_1');
    const finDefSection = document.getElementById('fin_def_one');

    if (finDeftLink && finDefSection) {
        finDeftLink.addEventListener('click', function (event) {
            event.preventDefault();

            const offset = 100; // scroll to 100px above the element
            const elementPosition = finDefSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const finDeftLink = document.getElementById('fin_2');
    const finDefSection = document.getElementById('fin_def_two');

    if (finDeftLink && finDefSection) {
        finDeftLink.addEventListener('click', function (event) {
            event.preventDefault();

            const offset = 100; // scroll to 100px above the element
            const elementPosition = finDefSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    }
});




document.getElementById('home-link').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
});


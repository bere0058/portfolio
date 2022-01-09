/*Navigation*/

/**********Declatation of variables**********/

/*Button variables*/
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const navDiv = document.querySelector('.nav-container');
const navContent = document.getElementById('navbarSupportedContent');
const navContainer = document.querySelector('.sticky-top');
const navConatinerWidth = window.matchMedia("(max-width: 992px)")
const button = document.querySelector('.navbar-toggler');
const title = document.querySelector('h1');
const container = document.querySelector('.container-fluid');
const footer = document.querySelector('.footer-container');

/**********Button click event**********/

button.addEventListener('click', () => {
    main.classList.toggle('bg-tblack');
    main.classList.toggle('blur');
    nav.classList.toggle('width');
    nav.classList.toggle('navbar');
    nav.classList.toggle('bg-light');
    navContainer.classList.toggle('height');
    container.classList.toggle('custom-container');
    title.classList.toggle('bg-transparent');
    title.classList.toggle('sticky-title');
    footer.classList.toggle('blur');
    footer.classList.toggle('bg-tblack');
});

/*Nav container height match*/
const lo = () => {
    if (navConatinerWidth.matches) {
        navDiv.style.height = title.clientHeight + "px";
    };
}
lo();


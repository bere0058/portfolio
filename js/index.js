/*General Script*/

/*Navigation*/

/**********Declatation of variables**********/

/*Button variables*/
const window992 = window.matchMedia("(max-width: 992px)");
export default window992;
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const navDiv = document.querySelector('.nav-container');
const navContent = document.getElementById('navbarSupportedContent');
const navContainer = document.querySelector('.sticky-top');
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
    nav.classList.toggle('bg-blue-2');
    navContainer.classList.toggle('height');
    container.classList.toggle('custom-container');
    title.classList.toggle('bg-transparent');
    title.classList.toggle('sticky-title');
    title.classList.toggle('end-0');
    footer.classList.toggle('blur');
    footer.classList.toggle('bg-tblack');
});

/*Nav container height match*/
if (window992.matches) {
    navDiv.style.height = title.clientHeight + "px";
};
/*Navigation*/ 

const button = document.querySelector('#btn');
const navConatinerWidth = window.matchMedia("(max-width: 992px)")
let footer = document.querySelector('.footer-container');
let nav = document.querySelector('nav');
let navContainer = document.querySelector('.sticky-top');
let title = document.querySelector('h1');
let container = document.querySelector('.container-fluid');
let main = document.querySelector('main');
let navDiv = document.querySelector('.nav-container');
let navContent = document.getElementById('navbarSupportedContent');

button.addEventListener('click', () => {
    main.classList.toggle('bg-tblack');
    main.classList.toggle('blur');
    footer.classList.toggle('blur');
    nav.classList.toggle('width');
    nav.classList.toggle('navbar');
    nav.classList.toggle('bg-light');
    title.classList.toggle('sticky-title');
    title.classList.toggle('bg-transparent');
    navContainer.classList.toggle('height');
    container.classList.toggle('custom-container');
    footer.classList.toggle('bg-tblack');
}) ;

let lo = () => {
    if (navConatinerWidth.matches) {
        navDiv.style.height = title.clientHeight + "px";
    }
}
lo(); 
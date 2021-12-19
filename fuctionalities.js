const logo = document.getElementById('logo');
const button = document.getElementById('nav');

button.addEventListener('click', () => {
    nav.classList.remove('navbar');
    nav.classList.toggle('width');
    logo.classList.toggle('w-25');
}) ;

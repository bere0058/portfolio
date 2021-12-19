const logo = document.getElementById('logo');
const button = document.getElementById('nav');

button.addEventListener('click', () => {
    nav.style.height= "100vh";
    nav.classList.remove('navbar');
    nav.classList.add('width');
    logo.classList.remove('w-25');
}) ;

const titles = document.getElementById('title');
const button = document.getElementById('nav');

button.addEventListener('click', () => {
    nav.classList.toggle('navbar');
    nav.classList.toggle('width');
    title.classList.toggle('hidden-content');
    title.classList.toggle('t-relative'); 
}) ;

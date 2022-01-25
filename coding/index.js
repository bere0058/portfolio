import window992 from '../index.js'
const imgAll = document.querySelectorAll('img')
if (window992.matches) {
    imgAll.forEach(item => {
        item.classList.remove('p-4');
        item.classList.add('py-2');
    });
}
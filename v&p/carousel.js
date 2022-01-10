/*Carousel variables*/
const window992 = window.matchMedia("(min-width: 992px)");
const carousel = document.querySelector('.carousel-section');
const carouselDiv = document.querySelector('.carousel');
const carouselNav = document.querySelector('.carousel-nav');
const btnNext = document.querySelector('.btn-next');
const btnPrevious = document.querySelector('.btn-previous');
const carouselContainer = document.querySelector('.carousel-container');
const carouselSlidesContainer = document.querySelector('.carousel-slides-container');
const carouselImagesAll = document.querySelectorAll('.carousel-img');
const carouselPicture = document.querySelectorAll('.carousel-picture');
const images = Array.from(document.querySelectorAll('.pictures'));
const slidesArray = Array.from(carouselSlidesContainer.children);
const navArray = Array.from(carouselNav.children);

/**********Carousel event**********/

/*Carousel pop up*/
carousel.classList.remove('d-hidden');
slidesArray.forEach(item => {
    item.style.width = carouselContainer.clientWidth + "px";
    item.style.height = carouselContainer.clientHeight + "px";
});
carouselImagesAll.forEach(item => {
    item.style.height = carouselContainer.clientHeight + "px";
});
/*Carousel slides*/
/*Arrange slides next to another*/
const slideWidth = slidesArray[0].clientWidth;
const setSlidePosition = (item, index) => {
    item.style.left = slideWidth * index + "px";
};
slidesArray.forEach(setSlidePosition);
/*Button click*/
const moveToSlide = (carouselSlidesContainer, currentSlide, targetSlide) => {
    carouselSlidesContainer.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
const moveWithBtn = (currentSlide, targetBtn) => {
    currentSlide.classList.remove('current-btn');
    targetBtn.classList.add('current-btn');
}
/*Button right*/
btnNext.addEventListener('click', () => {
    const currentSlide = carouselSlidesContainer.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentBtn = carouselNav.querySelector('.current-btn');
    const nextBtn = currentBtn.nextElementSibling;
    moveToSlide(carouselSlidesContainer, currentSlide, nextSlide);
    moveWithBtn(currentBtn, nextBtn);
})
/*Button left*/
btnPrevious.addEventListener('click', () => {
    const currentSlide = carouselSlidesContainer.querySelector('.current-slide');
    const previousSlide = currentSlide.previousElementSibling;
    const currentBtn = carouselNav.querySelector('.current-btn');
    const previousBtn = currentBtn.previousElementSibling;
    moveToSlide(carouselSlidesContainer, currentSlide, previousSlide);
    moveWithBtn(currentBtn, previousBtn);
});
carouselNav.addEventListener('click', (e) => {
    const targetBtn = e.target.closest('button');
    const currentBtn = carouselNav.querySelector('.current-btn');
    const currentSlide = carouselSlidesContainer.querySelector('.current-slide');
    if (!targetBtn) return;
    const targetIndex = navArray.findIndex(btn => btn === targetBtn);
    const target = slidesArray[targetIndex];
    moveToSlide(carouselSlidesContainer, currentBtn, target);
    moveWithBtn(currentBtn, targetBtn);
    if (targetIndex === 0) {
        btnPrevious.classList.add('d-none');
        btnNext.classList.add('d-none');
    } else if (targetIndex === slidesArray.length - 1) {
        btnPrevious.classList.add('d-none');
        btnNext.classList.add('d-none');
    } else {
        btnPrevious.classList.add('d-none');
        btnNext.classList.add('d-none');
    }
});
console.log(slidesArray)
/*Carousel variables*/
const window992 = window.matchMedia("(min-width: 992px)");
const imagesMain = main.querySelectorAll('picture')
const imagesArray = Array.from(imagesMain);
const carousel = document.querySelector('.carousel-section');

/**********Carousel event**********/

imagesArray.forEach(item => {
    item.addEventListener('click', (e) => {
        carousel.innerHTML = `<div class="carousel-return text-center">Press Esc to return</div>
        <div class="carousel d-flex overflow-hidden">
        <button class="carousel-btn position-absolute align-self-center border-0 btn-previous d-none"><img src="img/arrow.svg" alt="arrow" class="w-100"></button>
        <div class="carousel-container">
          <ul class="d-flex justify-content-center carousel-slides-container">
            <li class="carousel-slide position-absolute bg-black">
              <picture class="d-flex justify-content-center p-0 carousel-img img-fluid">
                <source srcset="
                          img/gatineau-derivatives/gatineau-320_x_213.JPG 320w,
                          img/gatineau-derivatives/gatineau-480_x_319.JPG 480w,
                          img/gatineau-derivatives/gatineau-720_x_480.JPG 720w,
                          img/gatineau-derivatives/gatineau-960_x_639.JPG 960w,
                          img/gatineau-derivatives/gatineau-1440_x_960.JPG 1440w,
                          img/gatineau-derivatives/gatineau-1920_x_1279.JPG 1920w" sizes="
                          (max-width: 320px) 320px,
                          (max-width: 480px) 480px,
                          (max-width: 640px) 640px,
                          (max-width: 720px) 720px,
                          (max-width: 960px) 960px,
                          (max-width: 1440px) 1440px,
                          (max-width: 1920px) 1920px" media="(min-width: 320px)">
                <img src="img/gatineau-derivatives/gatineau.jpeg" alt="gatineau">
              </picture>
            </li>
            <li class="carousel-slide position-absolute bg-black">
              <picture class="d-flex justify-content-center p-0 carousel-img img-fluid">
                <source srcset="
                        img/rideau-derivatives/rideau-320_x_480.JPG 320w,
                        img/rideau-derivatives/rideau-480_x_720.JPG 480w,
                        img/rideau-derivatives/rideau-720_x_1080.JPG 720w,
                        img/rideau-derivatives/rideau-960_x_1440.JPG 960w,
                        img/rideau-derivatives/rideau-1440_x_2160.JPG 1440w,
                        img/rideau-derivatives/rideau-1920_x_2880.JPG 1920w" sizes="
                        (max-width: 320px) 320px,
                        (max-width: 480px) 480px,
                        (max-width: 640px) 640px,
                        (max-width: 720px) 720px,
                        (max-width: 960px) 960px,
                        (max-width: 1440px) 1440px,
                        (max-width: 1920px) 1920px" media="(min-width: 320px)">
                <img src="img/rideau-derivatives/rideau.jpeg" alt="rideau">
              </picture>
            </li>
            <li class="carousel-slide position-absolute bg-black">
              <picture class="d-flex justify-content-center p-0 carousel-img img-fluid">
                <source srcset="
                          img/kid-derivatives/kid-320_x_480.jpg 320w,
                          img/kid-derivatives/kid-480_x_720.jpg 480w,
                          img/kid-derivatives/kid-720_x_1080.jpg 720w,
                          img/kid-derivatives/kid-960_x_1440.jpg 960w,
                          img/kid-derivatives/kid-1440_x_2160.jpg 1440w,
                          img/kid-derivatives/kid-1920_x_2880.jpg 1920w" sizes="
                          (max-width: 320px) 320px,
                          (max-width: 480px) 480px,
                          (max-width: 640px) 640px,
                          (max-width: 720px) 720px,
                          (max-width: 960px) 960px,
                          (max-width: 1440px) 1440px,
                          (max-width: 1920px) 1920px" media="(min-width: 320px)">
                <img src="img/kid-derivatives/kid.jpeg" alt="kid">
              </picture>
            </li>
            <li class="carousel-slide position-absolute bg-black">
              <picture class="d-flex justify-content-center p-0 carousel-img img-fluid">
                <source srcset="
                          img/kidtree-derivatives/kidtree-320_x_213.JPG 320w,
                          img/kidtree-derivatives/kidtree-480_x_319.JPG 480w,
                          img/kidtree-derivatives/kidtree-720_x_480.JPG 720w,
                          img/kidtree-derivatives/kidtree-960_x_639.JPG 960w,
                          img/kidtree-derivatives/kidtree-1440_x_960.JPG 1440w,
                          img/kidtree-derivatives/kidtree-1920_x_1279.JPG 1920w" sizes="
                          (max-width: 320px) 320px,
                          (max-width: 480px) 480px,
                          (max-width: 640px) 640px,
                          (max-width: 720px) 720px,
                          (max-width: 960px) 960px,
                          (max-width: 1440px) 1440px,
                          (max-width: 1920px) 1920px" media="(min-width: 320px)">
                <img src="img/kid-tree-derivatives/kid-tree.jpeg" alt="kid behind a tree">
              </picture>
            </li>
            <li class="carousel-slide position-absolute bg-black">
              <picture class="d-flex justify-content-center p-0 carousel-img img-fluid">
                <source srcset="
                        img/scenary-derivatives/scenary-320_x_213.JPG 320w,
                        img/scenary-derivatives/scenary-480_x_319.JPG 480w,
                        img/scenary-derivatives/scenary-720_x_480.JPG 720w,
                        img/scenary-derivatives/scenary-960_x_639.JPG 960w,
                        img/scenary-derivatives/scenary-1440_x_960.JPG 1440w,
                        img/scenary-derivatives/scenary-1920_x_1279.JPG 1920w" sizes="
                        (max-width: 320px) 320px,
                        (max-width: 480px) 480px,
                        (max-width: 640px) 640px,
                        (max-width: 720px) 720px,
                        (max-width: 960px) 960px,
                        (max-width: 1440px) 1440px,
                        (max-width: 1920px) 1920px" media="(min-width: 320px)">
                <img src="img/scenary-derivatives/scenary.jpeg" alt="scenary-gatineau">
              </picture>
            </li>
          </ul>
        </div>
        <button class="carousel-btn position-absolute align-self-center border-0 btn-next d-none end-0"><img src="img/arrow.svg" alt="arrow" class="w-100 next"></button>
      </div>
      <div class="carousel-nav d-flex justify-content-center position-absolute p-2">
      <button class="carousel-indicator mx-2 border-0 rounded-circle"></button>
      <button class="carousel-indicator mx-2 border-0 rounded-circle"></button>
      <button class="carousel-indicator mx-2 border-0 rounded-circle"></button>
      <button class="carousel-indicator mx-2 border-0 rounded-circle"></button>
      <button class="carousel-indicator mx-2 border-0 rounded-circle"></button>
    </div>`;
        main.classList.add('blur');
        navContainer.classList.add('blur');
        /*Variables*/
        const carouselDiv = document.querySelector('.carousel');
        const carouselNav = document.querySelector('.carousel-nav');
        const carouselContainer = document.querySelector('.carousel-container');
        const carouselSlidesContainer = document.querySelector('.carousel-slides-container');
        const carouselSlide = document.querySelectorAll('.carousel-slide');
        const carouselImagesAll = document.querySelectorAll('.carousel-img');
        const slidesArray = Array.from(carouselSlidesContainer.children);
        const navArray = Array.from(carouselNav.children);
        const targetImage = e.target.closest('picture');
        const targetImageIndex = imagesArray.findIndex(i => i === targetImage);
        const carouselTargetImage = carouselSlide[targetImageIndex];
        const carouselTargetBtn = navArray[targetImageIndex];
        
        /*Carousel Positioning*/
        carouselTargetImage.classList.add('current-slide');
        carouselTargetBtn.classList.add('current-btn');
        carousel.classList.remove('d-hidden');
        slidesArray.forEach(item => {
            item.style.width = carouselContainer.clientWidth + "px";
            item.style.height = carouselContainer.clientHeight + "px";
        });
        carouselImagesAll.forEach(item => {
            item.style.height = carouselContainer.clientHeight + "px";
        });
        /*Arrange slides next to another*/
        const slideWidth = slidesArray[0].clientWidth;
        const setSlidePosition = (item, index) => {
            item.style.left = slideWidth * index + "px";
        };
        /*Button clicks*/
        const moveToSlide = (carouselSlidesContainer, currentSlide, targetSlide) => {
            carouselSlidesContainer.style.transform = 'translateX(-' + targetSlide.style.left + ')';
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
        }
        const moveWithBtn = (currentSlide, targetBtn) => {
            currentSlide.classList.remove('current-btn');
            targetBtn.classList.add('current-btn');
        }
        /*Carousel Nav*/
        carouselNav.addEventListener('click', (e) => {
            const targetBtn = e.target.closest('button');
            const currentBtn = carouselNav.querySelector('.current-btn');
            const currentSlide = carouselSlidesContainer.querySelector('.current-slide');
            if (!targetBtn) return;
            const targetIndex = navArray.findIndex(btn => btn === targetBtn);
            const target = slidesArray[targetIndex];
            moveWithBtn(currentBtn, targetBtn);           
            moveToSlide(carouselSlidesContainer, currentSlide, target);
        });
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                carousel.classList.remove('d-hidden');
                carousel.innerHTML = "";
                main.classList.remove('blur');
                navContainer.classList.remove('blur');
            }
        });
    })
})

/**********Functions Yet to add**********/
/*Button right
btnNext.addEventListener('click', () => {
    const currentSlide = carouselSlidesContainer.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentBtn = carouselNav.querySelector('.current-btn');
    const nextBtn = currentBtn.nextElementSibling;
    moveToSlide(carouselSlidesContainer, currentSlide, nextSlide);
    moveWithBtn(currentBtn, nextBtn);
})*/
/*Button left
btnPrevious.addEventListener('click', () => {
    const currentSlide = carouselSlidesContainer.querySelector('.current-slide');
    const previousSlide = currentSlide.previousElementSibling;
    const currentBtn = carouselNav.querySelector('.current-btn');
    const previousBtn = currentBtn.previousElementSibling;
    moveToSlide(carouselSlidesContainer, currentSlide, previousSlide);
    moveWithBtn(currentBtn, previousBtn);
});*/
/*Carousel Nav
carouselNav.addEventListener('click', (e) => {
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
    console.log(targetBtn)
});*/
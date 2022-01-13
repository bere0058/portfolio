/*Carousel variables*/
const window992 = window.matchMedia("(min-width: 992px)");
const Main = main.querySelectorAll('picture')
const imagesMainArray = Array.from(Main);
const carousel = document.querySelector('.carousel-section');
const carouselContainer = document.querySelector('.carousel-container');

/**********Carousel event**********/
if (window992.matches) {
  imagesMainArray.forEach(item => {
    item.addEventListener('click', (e) => {
      /*Background blur effect*/
      main.classList.add('blur');
      navContainer.classList.add('blur');
      carousel.classList.remove('d-none');
      /*Variables*/
      const carouselDiv = document.querySelector('.carousel');
      const carouselReturn = document.querySelector('.carousel-return');
      const carouselNav = document.querySelector('.carousel-nav');
      const carouselSlidesContainer = document.querySelector('.carousel-slides-container');
            
      /*Inserting carousel images from the main content*/
      for (let i = 0; i < imagesMainArray.length; i++) {
        carouselSlidesContainer.innerHTML += `<li class="carousel-slide position-absolute bg-black">${imagesMainArray[i].outerHTML}</li>`
      }
      const carouselSlide = document.querySelectorAll('.carousel-slide');
      const slidesArray = Array.from(carouselSlidesContainer.children);
      const picturesArray = carousel.querySelectorAll('picture');
      const imagesArray = carousel.querySelectorAll('img');
      const carouselImagesAll = document.querySelectorAll('.carousel-img');
      const navArray = Array.from(carouselNav.children);
      const targetImage = e.target.closest('picture');
      const targetImageIndex = imagesMainArray.findIndex(i => i === targetImage);
      const carouselTargetImage = carouselSlide[targetImageIndex];
      const carouselTargetBtn = navArray[targetImageIndex];

      /*Carousel slides classes*/
      picturesArray.forEach(item => {
        item.classList.add('carousel-slide');
        item.classList.add('height');
        item.classList.add('p-0');
        item.classList.remove('vp-img');
      });
      imagesArray.forEach(item => {
        item.classList.remove('py-2');
        item.classList.remove('w-100');
      });
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
      const returnToPage = () => {
          carousel.classList.add('d-none');
          carouselSlidesContainer.innerHTML = "";
          main.classList.remove('blur');
          navContainer.classList.remove('blur');
          navArray.forEach(item => {
            item.classList.remove('current-btn');
          })
      }
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          returnToPage();
        }
      });
      carouselReturn.addEventListener('click', () => {
        returnToPage();
      })
    });
  });
}


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
const slideDots = document.querySelectorAll('.slider-section.first .carousel-dot');
const slideDots2 = document.querySelectorAll('.slider-section.second .carousel-dot');
const slides = document.querySelectorAll('.slider-section.first .carousel-slide');
const carouselSlidesElem = document.querySelector('.slider-section.second .carousel-slides');

function onDotButtonClick(event) {
    const activeDotButton = document.querySelector('.slider-section.first .carousel-dot.active');
    const clickedDotButton = event.target;
    activeDotButton.classList.remove('active');
    clickedDotButton.classList.add('active');

    const activeSlide = document.querySelector('.slider-section.first .carousel-slide.active');
    activeSlide.classList.remove('active');

    for (let i = 0; i < slideDots.length; i++) {
        if (clickedDotButton === slideDots[i]) {
            slides[i].classList.add('active');
            currentSlide = i;
            clearInterval(timerId);
            timerId = setInterval(doFade, 3500);
        }
    }
}

let currentSlide = 0;
let timerId = setInterval(doFade, 3500);

function doFade() {
    slideDots[currentSlide].classList.remove('active');
    slides[currentSlide].classList.remove('active');

    currentSlide++;
    if (currentSlide === slideDots.length) currentSlide =0;

    carouselSlidesElem.style.transform = `translateX(-${currentSlide * 100}%)`;

    slideDots[currentSlide].classList.add('active');
    slides[currentSlide].classList.add('active');
}

let activeDotButton = document.querySelector('.slider-section.second .carousel-dot');

function onDotButtonClick2(event) {
    const clickedDotButton = event.target;
    activeDotButton.classList.remove('active');
    clickedDotButton.classList.add('active');
    activeDotButton = clickedDotButton;

    for (let i = 0; i < slideDots2.length; i++) {
        if (clickedDotButton === slideDots2[i]) {
            carouselSlidesElem.style.transform = `translateX(-${i * 100}%)`;
        }
    }
}




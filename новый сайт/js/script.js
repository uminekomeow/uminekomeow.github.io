function scrollCarousel(carouselContainer, prevBtn, nextBtn) {
  let scrollPosition = 0;

  prevBtn.addEventListener('click', () => {
    scrollPosition -= carouselContainer.offsetWidth;
    if (scrollPosition < 0) scrollPosition = 0;
    carouselContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    scrollPosition += carouselContainer.offsetWidth;
    if (scrollPosition > carouselContainer.scrollWidth - carouselContainer.offsetWidth) {
      scrollPosition = carouselContainer.scrollWidth - carouselContainer.offsetWidth;
    }
    carouselContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  });
}

const carouselItems = document.querySelectorAll('.t-carousel-item');
const prevtBtn = document.querySelector('.t-prev-btn');
const nexttBtn = document.querySelector('.t-next-btn');
const carouselContainer = document.querySelector('.t-carousel');

scrollCarousel(carouselContainer, prevtBtn, nexttBtn);

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const textContainer = document.querySelector('.text-container');

scrollCarousel(textContainer, prevBtn, nextBtn);
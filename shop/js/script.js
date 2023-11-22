function scrollCarousel(carouselContainer, prevBtn, nextBtn) {
  let scrollPosition = 0;
  const itemWidth = 1200; // Ширина каждого элемента
  const maxScrollPosition = carouselContainer.scrollWidth - carouselContainer.offsetWidth;

  prevBtn.addEventListener('click', () => {
    scrollPosition -= itemWidth + 10; // Добавьте отступ между элементами
    if (scrollPosition < 0) scrollPosition = 0;
    carouselContainer.scroll({ left: scrollPosition, behavior: 'smooth' });
    nextBtn.classList.remove('disabled');
    if (scrollPosition <= 0) {
      prevBtn.classList.add('disabled');
    }
  });

  nextBtn.addEventListener('click', () => {
    scrollPosition += itemWidth + 10; // Добавьте отступ между элементами
    if (scrollPosition > maxScrollPosition) {
      scrollPosition = maxScrollPosition;
      nextBtn.classList.add('disabled');
    }
    carouselContainer.scroll({ left: scrollPosition, behavior: 'smooth' });
    prevBtn.classList.remove('disabled');
  });

  // Проверка и скрытие кнопки "Next" при загрузке страницы
  if (scrollPosition >= maxScrollPosition) {
    nextBtn.classList.add('disabled');
  }
}

const carouselContainer = document.querySelector('.t-carousel');
const prevBtn = document.querySelector('.t-prev-btn');
const nextBtn = document.querySelector('.t-next-btn');

scrollCarousel(carouselContainer, prevBtn, nextBtn);

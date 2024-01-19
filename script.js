// Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице. 
// Слайдер должен позволять переключаться между изображениями и отображать их в центре экрана.

// 1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:

// a. Контейнер для отображения текущего изображения.
// b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
// c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

// 2. Используйте HTML для создания элементов интерфейса.

// 3. Используйте JavaScript для обработки событий:

// a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(document.querySelectorAll('.slider-image'));
const points = Array.from(document.querySelectorAll('.point'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

points.forEach((point, index) => {
  point.addEventListener('click', () => {
    slideIndex = index;
    startSlider();
  });
});

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  startSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  startSlider();
}

function startSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

startSlider();

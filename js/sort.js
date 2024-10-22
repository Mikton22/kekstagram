// Сортировка фотографий с сервера
export async function loadImages() {
  try {
    // Здесь делается запрос на сервер за изображениями
    let response = await fetch('https://25.javascript.htmlacademy.pro/kekstagram/data');
    let images = await response.json();

    // Фильтры
    const Filter = {
      DEFAULT: 'filter-default',
      RANDOM: 'filter-random',
      DISCUSSED: 'filter-discussed',
    };

    function defaultFilter() {
      Filter.DEFAULT = images;
    }

    function randomFilter() {
      Filter.RANDOM = images.sort(() => Math.random() - 0.5);
    }

    function discussedFilter() {
      Filter.DISCUSSED = images.sort((a,b) => b.comments - a.comments);
    }

    // Показываем блок фильтров после загрузки изображений
    let filtersElement = document.querySelector('.img-filters');
    let currentFilter = '';
    let pictures = [];
    filtersElement.classList.remove('visually-hidden');

  } catch (error) {
    console.error('Ошибка загрузки изображений:', error);
  }
}

// Вызов функции загрузки изображений при загрузке страницы
window.addEventListener('load', () => {
  loadImages();
});

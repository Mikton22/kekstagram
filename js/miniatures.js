const picturesContainer = document.querySelector('.pictures');
const miniatureTemplate = document.querySelector('#picture').content.querySelector('.picture');

/**
 * Функция для отрисовки списка миниатюр.
 * @param {Array} pictures - Массив объектов с данными о фотографиях.
 */
export function rendersPictureList(pictures) {
  // Проверяем, что pictures является массивом
  if (!Array.isArray(pictures)) {
    console.error('Expected an array of pictures, but got:', pictures);
    return;
  }

  const fragment = document.createDocumentFragment(); // Создаем фрагмент для вставки

  pictures.forEach(({ url, likes, comments= [] }) => {
    // Клонируем шаблон
    const miniatureElement = miniatureTemplate.cloneNode(true);

    // Заполняем данными
    miniatureElement.querySelector('.picture__img').src = url;
    miniatureElement.querySelector('.picture__likes').textContent = likes;
    miniatureElement.querySelector('.picture__comments').textContent = comments.length;

    // Добавляем миниатюру во фрагмент
    fragment.appendChild(miniatureElement);
  });

  // Вставляем фрагмент с миниатюрами в контейнер
  picturesContainer.appendChild(fragment);
}

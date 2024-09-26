const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

export const openPicture = (miniature) => {
  document.querySelector('body').classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  bigPicture.querySelector('.big-picture__img img').src = miniature.querySelector('.picture__img').src;
  bigPicture.querySelector('.likes-count').textContent = miniature.querySelector('.picture__likes').textContent;
  bigPicture.querySelector('.big-picture__cancel').addEventListener('click', () => {
    closePicture();
  });
};

function closePicture() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePicture();
  }
});

closeButton.addEventListener('click', closePicture);

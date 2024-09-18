const bigPicture = document.querySelector('.big-picture');


export function openPicture() {
  bigPicture.addEventListener('click', function () {
    bigPicture.classList.remove('hidden');
  });
};



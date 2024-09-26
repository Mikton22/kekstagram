const uploadBtn = document.querySelector('#upload-file');
const openFile = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeBtn = document.querySelector('.img-upload__cancel');



// load photo
export const load = () => {
  uploadBtn.addEventListener('click', function () {
    openFile.classList.remove('hidden');
  });
};

// close photo
export const close = () => {
  closeBtn.addEventListener('click', function () {
    openFile.classList.add('hidden');
    body.classList.remove('modal-open');
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
      openFile.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  });
};

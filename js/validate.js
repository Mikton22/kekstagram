const uploadBtn = document.querySelector('#upload-file');
const openFile = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');



// load photo
export const load = () => {
  uploadBtn.addEventListener('click', function () {
    openFile.classList.remove('hidden');
  });
};

// close photo
// export const close = () => {
//
// }

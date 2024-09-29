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

const form = document.querySelector('.img-upload__form');
const hashtagInput = form.querySelector('.text__hashtags');

const pristine = new Pristine(form);

export function validateHashtag (value) {
  // console.log(value);

  if (!value) {
    return true;
  }

  const forbiddenSymbols = ['@', '!', '$', '%', '^', '&', '*', '(', ')', ',', '.', '/', ';', '[', ']'];

  for (let symbol of forbiddenSymbols) {
    if (value.includes(symbol)) {
      return false;
    } else {
      return value.startsWith('#') && value.length >=2 && value.length <=20;
    }
  }
}

pristine.addValidator(form.querySelector('#hashtag'), validateHashtag);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const hashtag = document.querySelector('.text__hashtags').value;

  if (validateHashtag(hashtag)) {
    console.log('Message send');
  } else {
    console.log('Message not send');
  }
});

hashtagInput.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();  // Блокируем событие Esc для закрытия формы
  }
});

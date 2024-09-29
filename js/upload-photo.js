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

// валидируем хэштеги
function validateHashtag (value) {
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

// валидируем комментарий
const commentInput = form.querySelector('.text__description');
const socialComment = document.querySelector('.social__footer-text');

function validateComment (value) {
  return value && value.length <= 140;
}

// Блокируем событие Esc для закрытия формы
commentInput.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
});

// Присоединяем валидатор
// pristine.addValidator(commentInput, validateComment, 'Комментарий не должен превышать 140 символов');
pristine.addValidator(form.querySelector('#description'), validateComment);

// Блокируем отправку формы
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
});

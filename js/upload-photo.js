const uploadBtn = document.querySelector('#upload-file');
const openFile = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeBtn = document.querySelector('.img-upload__cancel');
// const button = document.querySelector('.img-upload__submit'); // кнопка опубликовать
// const errorBtn = document.querySelector('.error__button');
// const err = document.querySelector('#error');

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

const hashtagField = form.querySelector('.text__hashtags');
const hashtagExample = /^#[A-Za-zА-Яа-яЁё0-9]{0,19}$/
const MAX_HASHTAGS_COUNT = 5;
const submitButton = form.querySelector('.img-upload__submit');

function validateTags() {
  if (hashtagField.value === '') {
    return true;
  } else {
    const tagsList = hashtagField.value.trim().split(' ')

    let result;

    for (let i=0; i<tagsList.length; i++) {
      result = true;

      if (!hashtagExample.test(tagsList[i])) {

        result = false;
        break;
      }
    }

    return result;
  }
}

function validateTagsCount() {
  return  hashtagField.value.trim().split(' ').length <= MAX_HASHTAGS_COUNT;
}

pristine.addValidator(
  hashtagField,
  validateTagsCount,
  'Максимальное количество хештегов - 5!'
);

pristine.addValidator(
  hashtagField,
  validateTags,
  'Введён некорретный хештег!');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
}

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
        },
        () => {
          showAlert('Не удалось опубликовать изображение. Попробуйте ещё раз.');
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

//Получение данных с сервера
const getData = (onSuccess) => {
  fetch('https://25.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => response.json())
    .then((picturesList) => {
      onSuccess(picturesList)
    })
}

// Отправка данных на сервер
const sendData = (onSuccess, onFail, body) => {
  setUserFormSubmit(onCancelBtnClick)
  fetch('https://25.javascript.htmlacademy.pro/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess()
      } else {
        onFail('Не удалось опубликовать фотографию. Попробуйте ещё раз')
      }
    } )
    .catch(() => {
      onFail('Не удалось опубликовать фотографию. Попробуйте ещё раз')
    })
}

export {getData, sendData}

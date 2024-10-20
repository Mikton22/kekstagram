import {resetScale} from './scale.js';

const image = document.querySelector('.img-upload__preview img'); // превью эффекта на фото
const sliderEffect = document.querySelector('.effect-level__slider'); // слайдер
const effectLevel = document.querySelector('.effect-level__value'); // значение
const form = document.querySelector('.img-upload__form'); // форма загрузки
const body = document.querySelector('body');
const overlay = form.querySelector('.img-upload__overlay');
const hashtagField = form.querySelector('.text__hashtags');

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 1,
    step: 0.1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  },
];


const DEFAULT_EFFECTS = EFFECTS[0];

let chosenEffect = DEFAULT_EFFECTS;

const isDefault = () => chosenEffect === DEFAULT_EFFECTS;

const updateSlider = () => {
  if (isDefault()) {
    sliderEffect.classList.add('hidden');
  } else {
    sliderEffect.classList.remove('hidden');
    sliderEffect.noUiSlider.updateOptions({
      range: {
        min: chosenEffect.min,
        max: chosenEffect.max,
      },
      start: chosenEffect.max,
      step: chosenEffect.step,
    });
  }
};

const onFormChange = (evt) => {
  if (evt.target.classList.contains('effects__radio')) {
    chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
    updateSlider();
  }
};

const onSliderUpdate = () => {
  if (!isDefault()) {
    effectLevel.value = sliderEffect.noUiSlider.get();
    image.style.filter = `${chosenEffect.style}(${effectLevel.value}${chosenEffect.unit}`;
  }
};

noUiSlider.create(sliderEffect, {
  range: {
    min: DEFAULT_EFFECTS.min,
    max: DEFAULT_EFFECTS.max,
  },
  start: DEFAULT_EFFECTS.max,
  step: DEFAULT_EFFECTS.step,
  connect: 'lower'
});
updateSlider();

form.addEventListener('change', onFormChange);
sliderEffect.noUiSlider.on('update', onSliderUpdate);

export function showModal () {
  overlay.classList.remove('hidden');
  resetScale();
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
}

function hideModal() {
  form.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown)
}

//Проверка фокуса на полях ввода текста
function isTextFieldFocus() {
  return document.activeElement === hashtagField || document.activeElement === 'commentField';
}

//Проверка, что нажата Esc
function onEscKeyDown (evt) {
  if (evt.key === 'Escape' && !isTextFieldFocus()) {
    evt.preventDefault();
    hideModal();
  }
}

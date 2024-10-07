const image = document.querySelector('.img-upload__preview img'); // превью эффекта на фото
const sliderEffect = document.querySelector('.effect-level__slider'); // слайдер
const effectLevel = document.querySelector('.effect-level__value'); // значение
const form = document.querySelector('.img-upload__form'); // форма загрузки

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
];

const DEFAULT_EFFECTS = EFFECTS[0];

let chosenEffect = DEFAULT_EFFECTS;

const isDefault = () => chosenEffect === DEFAULT_EFFECTS;

const updateSlider = () => {
  if (isDefault()) {
    sliderEffect.classList.add('hidden');
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

form.addEventListener('change', onFormChange);


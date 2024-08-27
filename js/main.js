import { getRandomLikes } from './getRandomLikes.js';
// console.log(getRandomLikes);

// 1
// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Пример использования функции:
//  имя_функции(от, до); // Результат: целое число из диапазона "от...до"
/*
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const random = getRandomInt(2,7);
console.log(random);
*/

// 2
// Функция для проверки максимальной длины строки. Будет использоваться для
// проверки длины введённого комментария, но должна быть универсальна. Пример использования функции:
// имя_функции(проверяемая_строка, максимальная_длина); // Результат: true, если строка проходит по длине, и false — если не проходит
/*
function getLenght (str, max) {
  if (str.length <= max) {
    return true;
  } else {
    return false;
  }
}

const getC = getLenght('Функция для проверки максимальной длины строки', 25);
console.log(getC);
*/

// function checkStringLength (string, length) {    // скопировано с прошлого дз
//   return string.length <= length;
// }


// //Модуляция:
// // likes
// function getRandomLikes() {
//   // Генерация случайного числа от 0 до 1
//   const randomNumber = Math.random();
//   // Переводим случайное число в диапазон от 15 до 200
//   const likes = Math.floor(randomNumber  *  (200 - 15) + 15);
//   return likes; // Возвращаем случайное число
// }
// // Вызов функции для получения случайного числа
// const randomLikes = getRandomLikes();
// //console.log(randomLikes); // Выводим случайное число в консоль

//photo:
const url = 'photos/{{i}}.jpg';
const urls = [];
for (let i = 1; i <= 25; i++) {
  urls.push(url.replace('{{i}}', i));
}
// function:
function getRandomUrl() {
  return urls[Math.floor(Math.random()  *  urls.length)];
}
//console.log(getRandomUrl());

const comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?'
];
function getRandomComment() {
  return comments[Math.floor(Math.random()  *  comments.length)];
}
// Пример использования функции
//console.log(getRandomComment());

const description = [
  'Я и мой старый друг',
  'На фото — собачка. Собачка лежит на травке. Собачка — молодец.',
  'Я и мой кот. Кот очень красивый. Я тоже ничего.',
  'Закат. Чертовски красивый закат.',
  'Мы с друзьями на отдыхе. Стоим на красивом фоне на расслабоне',
  'Моя любимая машина. Моя, Лада Приора <3',
  'Просто красивое фото моей еды.'
];
function getRandomDescription() {
  return description[Math.floor(Math.random()  *  description.length)];
}
//console.log(getRandomDescription());

// генерируем аватар
function generateAvatarURL () {
  const randomNumber = Math.floor(Math.random()  *  6) + 1;
  return `img/avatar-${randomNumber}.svg`;
}
// Вызов функции для получения URL аватара
const avatarURL = generateAvatarURL();
//console.log(avatarURL); // Выведет сформированный URL аватара

//name
const names = [
  'Александр',
  'Николай',
  'Алёна',
  'Антон',
  'Варвара',
  'Алексей',
  'Галина',
  'Яков',
  'Екатерина',
  'Глеб'
];
function getRandomName() {
  return names[Math.floor(Math.random()  *  names.length)];
}
// eslint-disable-next-line no-console
console.log(getRandomName());

// генерируем пост
const posts = [];
for (let id = 1; id <= 25; id++) {
  const post = {
    id: id,
    url: getRandomUrl(),
    description: getRandomDescription(),
    likes: getRandomLikes(),
    comments: getRandomComment(),
    avatar: avatarURL,
    name: getRandomName()
  };
  posts.push(post);
}
// eslint-disable-next-line no-console
function getRandomPost() {
  return posts[Math.floor(Math.random()  *  posts.length)];
}
// eslint-disable-next-line no-console
console.log(getRandomPost()); // получаем один пост

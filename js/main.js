import { getRandomLikes } from './getRandomLikes.js';
import { getRandomUrl } from './photo.js';
// import { getRandomComment } from './getRandomComment.js';
import { getRandomDescription } from './getRandomDescription.js';
import { generateAvatarURL } from './generateAvatarURL.js';
import { getRandomName } from './getRandomName.js';
import { comments, getRandomComment } from './getRandomComment.js';
import '../nouislider/nouislider/nouislider.js';

import { rendersPictureList } from './miniatures.js';
import { openPicture } from './open-photo.js';
import { load } from './upload-photo.js';
import { close } from './upload-photo.js';
import { resetScale } from './scale.js';
import { loadImages } from './sort.js';
// import { validateHashtag } from './upload-photo.js';
import './effect.js';

// реализация показа рандомного поста
// const posts = [];
// for (let id = 1; id <= 25; id++) {
//   const post = {
//     id: id,
//     url: getRandomUrl(),
//     description: getRandomDescription(),
//     likes: getRandomLikes(),
//     // comments: commentsNumber.push(getRandomComment()),
//     comments: getRandomComment(comments),
//     avatar: generateAvatarURL(),
//     name: getRandomName()
//   };
//   posts.push(post);
// }

function getRandomPost() {
  return posts[Math.floor(Math.random()  *  posts.length)];
}

// eslint-disable-next-line no-console
// console.log(getRandomPost()); // получаем один пост

// рандомные комментарии
// function getCommentList() {
//   let commentList = [];
//   let commentCount = getRandomNum(0,4);
//
//   for (let i =0; i<=commentCount; i++) {
//     commentList.push(getRandomComment(comments));
//   };
//   return commentList;
// }
// console.log(getCommentList());

function getRandomNum(min, max) {
  // Генерация случайного числа от 0 до 1
  const randomNumber = Math.random();
  const randomNum = Math.floor(randomNumber  *  (max - min) + min);
  return randomNum; // Возвращаем случайное число
}

// const testPicturesRandom = ['url:' + './photos/' + `${getRandomNum(1,25)}` + '.jpg' + ',' + 'likes:' + `${getRandomLikes()}` + ',' + 'getCommentList(),' + 'description: getRandomDescription()'];
// console.log(testPicturesRandom);

const testPictures = [
  { url: './photos/1.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/2.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/3.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/4.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/5.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/6.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/7.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/8.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/9.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/10.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/11.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/12.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/13.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/14.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/15.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/16.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/17.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/18.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/19.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/20.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/21.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/22.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/23.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/24.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
  { url: './photos/25.jpg', likes: getRandomLikes(),  comments: getRandomComment(comments), description: getRandomDescription() },
];

console.log(testPictures);

// Вызов функции с тестовыми данными
rendersPictureList(testPictures);


document.querySelectorAll('.picture').forEach((picture) => {
  picture.addEventListener('click', () => {
    openPicture(picture);
  });
});

load();
close();
resetScale();

// загрузка комментариев
const commentLoader = document.querySelector('.comments-loader');

// очистим дефолтную секцию
function changeAllTextContent() {
  const allElements = document.querySelectorAll('.social__text');  // Находим все элементы на странице

  allElements.forEach(element => {
    if (element.childNodes.length > 0) {
      element.childNodes.forEach(child => {
        if (child.nodeType === Node.TEXT_NODE && child.nodeValue.trim() !== '') {
          child.nodeValue = getRandomComment(comments);  // Изменяем только текстовые узлы
        }
      });
    }
  });
}
changeAllTextContent();  // Запускаем функцию изменения текста

// функция работы кнопки загрузить еще
function getRandomCommentInPost() {
  commentLoader.addEventListener('click', (evt) => {
    console.log('Кнопка нажата');
    // currentComment.textContent = 'Комментарий загружен';
  });
}
getRandomCommentInPost();

// счетчик комментариев
const socialCount = document.querySelector('.comments-count'); // 125
function countComment() {
  socialCount.textContent = getRandomComment(comments).length;
}

countComment();

loadImages();

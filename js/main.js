import { getRandomLikes } from './getRandomLikes.js';
import { getRandomUrl } from './photo.js';
// import { getRandomComment } from './getRandomComment.js';
import { getRandomDescription } from './getRandomDescription.js';
import { generateAvatarURL } from './generateAvatarURL.js';
import { getRandomName } from './getRandomName.js';
import { comments, getRandomComment } from './getRandomComment.js';

import { rendersPictureList } from './miniatures.js';
import { openPicture } from './open-photo.js';
import { load } from './upload-photo.js';
import { close } from './upload-photo.js';
import { resetScale } from './scale.js';
// import { validateHashtag } from './upload-photo.js';

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

import { getRandomLikes } from './getRandomLikes.js';
import { getRandomUrl } from './photo.js';
import { getRandomComment } from './getRandomComment.js';
import { getRandomDescription } from './getRandomDescription.js';
import { generateAvatarURL } from './generateAvatarURL.js';
import { getRandomName } from './getRandomName.js';

import { rendersPictureList } from './miniatures.js';

const posts = [];
for (let id = 1; id <= 25; id++) {
  const post = {
    id: id,
    url: getRandomUrl(),
    description: getRandomDescription(),
    likes: getRandomLikes(),
    comments: getRandomComment(),
    avatar: generateAvatarURL(),
    name: getRandomName()
  };
  posts.push(post);
}

function getRandomPost() {
  return posts[Math.floor(Math.random()  *  posts.length)];
}

// eslint-disable-next-line no-console
console.log(getRandomPost()); // получаем один пост

const testPictures = [
  { url: './photos/1.jpg' },
  { url: './photos/2.jpg' },
  { url: './photos/3.jpg' },
  { url: './photos/4.jpg' },
  { url: './photos/5.jpg' },
  { url: './photos/6.jpg' },
  { url: './photos/7.jpg' },
  { url: './photos/8.jpg' },
  { url: './photos/9.jpg' },
  { url: './photos/10.jpg' },
  { url: './photos/11.jpg' },
  { url: './photos/12.jpg' },
  { url: './photos/13.jpg' },
  { url: './photos/14.jpg' },
  { url: './photos/15.jpg' },
  { url: './photos/16.jpg' },
  { url: './photos/17.jpg' },
  { url: './photos/18.jpg' },
  { url: './photos/19.jpg' },
  { url: './photos/20.jpg' },
  { url: './photos/21.jpg' },
  { url: './photos/22.jpg' },
  { url: './photos/23.jpg' },
  { url: './photos/24.jpg' },
  { url: './photos/25.jpg' },
];

// Вызов функции с тестовыми данными
rendersPictureList(testPictures);

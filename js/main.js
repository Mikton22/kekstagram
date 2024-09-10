import { getRandomLikes } from './getRandomLikes.js';
import { getRandomUrl } from './photo.js';
import { getRandomComment } from './getRandomComment.js';
import { getRandomDescription } from './getRandomDescription.js';
import { generateAvatarURL } from './generateAvatarURL.js';
import { getRandomName } from './getRandomName.js';

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

console.log(getRandomPost()); // получаем один пост

//photo:
const url = 'photos/{{i}}.jpg';
const urls = [];
for (let i = 1; i <= 25; i++) {
  urls.push(url.replace('{{i}}', i));
}
// function:
export function getRandomUrl() {
  return urls[Math.floor(Math.random()  *  urls.length)];
}
//console.log(getRandomUrl());

export const comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?',
  'Если бы у улыбки была форма, она была бы такой же, как у тебя на фото!',
  'Ты, как витаминка для души! Не хватает только упаковки с твоими улыбками!',
  'Ты — тот человек, который мог бы заставить дождь смеяться!',
  'Я думал, что в мире нет ничего лучше, чем пончики... пока не увидел твою улыбку!',
  'На этот пост можно смотреть вечно... и пытаться понять, что здесь происходит.',
  'Эта фотография — как зарядка для моих батареек! Спасибо за заряд позитива!',
  'С тобой точно не соскучишься! Даже молчание с тобой наполнено смехом!',
  'Улыбка на твоем лице напоминает мне о том, как важно просто быть счастливым!',
  'С тобой даже обычный день превращается в приключение! Надо побольше таких дней!'
];

export function getRandomComment(comment) {
   let randomIndex = Math.floor(Math.random() * comment.length);
  // return comments[Math.floor(Math.random()  *  comments.length)];
   return comment[randomIndex];
}

// export const randomFruit = getRandomComment(comments);
// console.log(randomFruit);

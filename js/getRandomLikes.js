export function getRandomLikes() {
  // Генерация случайного числа от 0 до 1
  const randomNumber = Math.random();
  // Переводим случайное число в диапазон от 15 до 200
  const likes = Math.floor(randomNumber  *  (200 - 15) + 15);
  return likes; // Возвращаем случайное число
}

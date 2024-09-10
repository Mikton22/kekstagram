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

export function getRandomName() {
  return names[Math.floor(Math.random()  *  names.length)];
}

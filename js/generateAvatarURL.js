export function generateAvatarURL() {
  const randomNumber = Math.floor(Math.random()  *  6) + 1;
  return `img/avatar-${randomNumber}.svg`;
}

// const avatarURL = generateAvatarURL();

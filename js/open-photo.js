const bigPicture = document.querySelector('.big-picture');
const pictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentCountBlock = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

function renderComments(comments) {
  socialComments.innerHTML = '';
  comments.forEach ((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('.social__comment');

    const avatar = document.createElement('img');
    avatar.classList.add('.social_picture');
    avatar.src = comment.avatar;
    avatar.alt = comment.name;
    avatar.width = 35;
    avatar.height = 35;

    const text = document.createElement('p');
    text.classList.add('social__text');
    text.textContent = comment.message;

    commentElement.appendChild(avatar);
    commentElement.appendChild(text);
    socialComments.appendChild(commentElement);
  });
}

export const openPicture = (miniature) => {
  document.querySelector('body').classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  bigPicture.querySelector('.big-picture__img img').src = miniature.querySelector('.picture__img').src;
  bigPicture.querySelector('.likes-count').textContent = miniature.querySelector('.picture__likes').textContent;
  bigPicture.querySelector('.big-picture__cancel').addEventListener('click', () => {
    closePicture();
  });
};

function closePicture() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscPress);
}

function onEscPress(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePicture();
  }
}

closeButton.addEventListener('click', closePicture);

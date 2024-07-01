const mediaMenu = document.querySelector('.media-menu');

const burgerButton = document.querySelector('.burger-menu');

const closeMediaButton = document.querySelector('.close-menu');

const buttonItemMenu1 = document.querySelector('.for-close-1');
const buttonItemMenu2 = document.querySelector('.for-close-2');
const buttonItemMenu3 = document.querySelector('.for-close-3');
const buttonItemMenu4 = document.querySelector('.for-close-4');
const buttonItemMenu5 = document.querySelector('.for-close-5');

//1 open menu
burgerButton.addEventListener('click', () => {
  mediaMenu.classList.toggle('is-open-menu');
});
//2 close menu
closeMediaButton.addEventListener('click', () => {
  mediaMenu.classList.remove('is-open-menu');
});

// About Us close menu
buttonItemMenu1.addEventListener('click', () => {
  mediaMenu.classList.remove('is-open-menu');
});
// Catalog close menu
buttonItemMenu2.addEventListener('click', () => {
  mediaMenu.classList.remove('is-open-menu');
});
// Sale close menu
buttonItemMenu3.addEventListener('click', () => {
  mediaMenu.classList.remove('is-open-menu');
});
// Reviews close menu
buttonItemMenu4.addEventListener('click', () => {
  mediaMenu.classList.remove('is-open-menu');
});
// Contact Us close menu
buttonItemMenu5.addEventListener('click', () => {
  mediaMenu.classList.remove('is-open-menu');
});

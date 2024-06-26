const mediaMenu=document.querySelector('.media-menu');

const burgerButton=document.querySelector('.burger-menu');

const closeMediaButton=document.querySelector('.close-menu');

// const buttonItemMenu1=document.querySelector('.media-list-button1');
// const buttonItemMenu2=document.querySelector('.media-list-button2');
// const buttonItemMenu3=document.querySelector('.media-list-button3');

//1 open menu
burgerButton.addEventListener('click', ()=>{
	mediaMenu.classList.toggle('is-open-menu');
	});
//2 close menu
closeMediaButton.addEventListener('click', ()=>{
	mediaMenu.classList.remove('is-open-menu');
});
//3 close menu
// buttonItemMenu1.addEventListener('click', ()=>{
// 	mediaMenu.classList.remove('is-open-menu');
// });
//4 close menu
// buttonItemMenu2.addEventListener('click', ()=>{
// 	mediaMenu.classList.remove('is-open-menu');
// });
//5 close menu
// buttonItemMenu3.addEventListener('click', ()=>{
// 	mediaMenu.classList.remove('is-open-menu');
// });
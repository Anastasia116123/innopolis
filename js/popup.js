let loginButton = document.querySelector('.button');
let PopUp = document.querySelector('.kontacts');

console.log('button');
console.log('loginPopUp');


loginButton.addEventListener('click', showPopUp);

function showPopUp(evt){
  console.log(evt);
  evt.preventDefault();
  PopUp.classList.toggle('show-popup')
};


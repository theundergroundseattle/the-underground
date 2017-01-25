'use strict';

// pin nav bar to top of window
function handleScroll() {
  var offset = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop;

  document.getElementById('nav-bar').className = (offset > 115 ? 'fixed' : '');
}

if (window.addEventListener){
  window.addEventListener('scroll', handleScroll, false);
} else {
  window.attachEvent('onscroll', handleScroll);
}

// display the modal
var modalOne = document.getElementById('my-modal-one');
var btnOne = document.getElementById('dev-picture-one');
var spanOne = document.getElementsByClassName('close')[0];

btnOne.onclick = function() {
  modalOne.style.display = 'block';
};

spanOne.onclick = function() {
  modalOne.style.display = 'none';
};

window.onclick = function(event){
  if (event.target === modalOne) {
    modalOne.style.display = 'none';
  }
};
var modalTwo = document.getElementById('my-modal-two');
var btnTwo = document.getElementById('dev-picture-two');
var spanTwo = document.getElementsByClassName('close')[1];

btnTwo.onclick = function() {
  modalTwo.style.display = 'block';
};

spanTwo.onclick = function() {
  modalTwo.style.display = 'none';
};

window.onclick = function(event){
  if (event.target === modalTwo) {
    modalTwo.style.display = 'none';
  }
};
var modalThree = document.getElementById('my-modal-three');
var btnThree = document.getElementById('dev-picture-three');
var spanThree = document.getElementsByClassName('close')[2];

btnThree.onclick = function() {
  modalThree.style.display = 'block';
};

spanThree.onclick = function() {
  modalThree.style.display = 'none';
};

window.onclick = function(event){
  if (event.target === modalThree) {
    modalThree.style.display = 'none';
  }
};
var modalFour = document.getElementById('my-modal-four');
var btnFour = document.getElementById('dev-picture-four');
var spanFour = document.getElementsByClassName('close')[3];

btnFour.onclick = function() {
  modalFour.style.display = 'block';
};

spanFour.onclick = function() {
  modalFour.style.display = 'none';
};

window.onclick = function(event){
  if (event.target === modalFour) {
    modalFour.style.display = 'none';
  }
};

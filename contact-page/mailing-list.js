'use strict';

var mainEl = document.getElementById('main');

if (localStorage.allSubscribers) {
  allSubscribers = JSON.parse(localStorage.allSubscribers);
  console.log('Retrieving from localStorage');
  console.log(allSubscribers);
} else {
  // If allProducts _is_ in localStorage, copy values accumulated over the past session
  console.log('There\'s no local storage!');
  var allSubscribers = [];
}

allSubscribers.length > 0 ? renderSubs() : renderEmpty();

function renderSubs() {
  for (var i = 0; i < allSubscribers.length; i++) {
    var listEl = document.createElement('ul');
    listEl.setAttribute('class', 'content');
    mainEl.appendChild(listEl);
    var itemElName, itemElEmail, itemEl, int1El, int2El, int3El;
    itemElName = document.createElement('li');
    itemElEmail = document.createElement('li');
    int1El = document.createElement('li');
    int2El = document.createElement('li');
    int3El = document.createElement('li');
    itemElName.textContent = 'Name: ' + allSubscribers[i].name;
    itemElEmail.textContent = 'Email address: ' + allSubscribers[i].email;
    int1El.textContent = 'Interest 1: ' + allSubscribers[i].interests.interest1.toString();
    int2El.textContent = 'Interest 2: ' + allSubscribers[i].interests.interest2.toString();
    int3El.textContent = 'Interest 3: ' + allSubscribers[i].interests.interest3.toString();
    listEl.appendChild(itemElName);
    listEl.appendChild(itemElEmail);
    listEl.appendChild(int1El);
    listEl.appendChild(int2El);
    listEl.appendChild(int3El);
  }
}

function renderEmpty() {
  console.log('No subscribers.');
  var pEl = document.createElement('p');
  pEl.textContent = 'You have no subscribers at this time.';
  mainEl.appendChild(pEl);
}

//
// for (var i = 0; i < listElements.length; i++) {
//   var tempElement = document.createElement('li');
//   tempElement.textContent = allSubscribers[0].interests.i;
//   listElements[i][0] = tempElement;
//   console.log(tempElement);
//   listEl.appendChild(listElements[i][0]);
// }

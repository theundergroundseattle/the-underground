'use strict';

var mainEl = document.getElementById('main');
var allSubscribers = JSON.parse(localStorage.allSubscribers);

for (var i = 0; i < allSubscribers.length; i++) {
  var listEl = document.createElement('ul');
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

//
// for (var i = 0; i < listElements.length; i++) {
//   var tempElement = document.createElement('li');
//   tempElement.textContent = allSubscribers[0].interests.i;
//   listElements[i][0] = tempElement;
//   console.log(tempElement);
//   listEl.appendChild(listElements[i][0]);
// }

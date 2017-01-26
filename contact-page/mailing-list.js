'use strict';

var subscriberSectionEl = document.getElementById('subscribers');
var resetButton = document.getElementById('reset');

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
    subscriberSectionEl.appendChild(listEl);
    var subscriberObject = allSubscribers[i];
    console.log(subscriberObject);
    for (var key in subscriberObject) {
      if (key !== 'interests') {
        var itemEl = document.createElement('li');
        itemEl.textContent = key.toUpperCase() + ': ' + subscriberObject[key];
        listEl.appendChild(itemEl);
        console.log(key);
        console.log(subscriberObject[key]);
      } else {
        for (var genre in subscriberObject['interests']) {
          var itemEl = document.createElement('li');
          itemEl.textContent = genre.toUpperCase() + ': ' + subscriberObject['interests'][genre];
          listEl.appendChild(itemEl);
          console.log(genre);
          console.log(subscriberObject['interests'][genre]);
        }
      }
    }
  }
}

function renderEmpty() {
  console.log('No subscribers.');
  var pEl = document.createElement('p');
  pEl.textContent = 'You have no new subscribers at this time.';
  subscriberSectionEl.appendChild(pEl);
}

// Need to figure out how to iterate on DOM node objects stored in an array
// for (var i = 0; i < listElements.length; i++) {
//   var tempElement = document.createElement('li');
//   tempElement.textContent = allSubscribers[0].interests.i;
//   listElements[i][0] = tempElement;
//   console.log(tempElement);
//   listEl.appendChild(listElements[i][0]);
// }

// Add a reset button to clear localStorage of past results and reload page
// Use ROT13 "encryption" lolwut
resetButton.onclick = function() {
  console.log('Reset button was pressed.');
  var checkReset = prompt('Are you sure? Doing so will erase all new records.\nPlease enter your admin password if this is correct. Otherwise press \'Cancel\'.');
  if (checkReset === 'Ocelot12') {
    localStorage.clear();
    console.log(localStorage);
    alert('Clearing all testing data. This page will now reload.');
    window.location.reload(true);
  } else {
    alert('Admin password was not provided. No changes have been made.');
  }
};

// Force scroll to top of page when page is reloaded with data reset
// Solution by ProfNandaa found at http://stackoverflow.com/a/26837814
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

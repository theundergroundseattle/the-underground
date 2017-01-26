'use strict';

var subscriberSectionEl = document.getElementById('subscribers');
var artistSectionEl = document.getElementById('artists');
var feedbackSectionEl = document.getElementById('feedback');
var resetButton = document.getElementById('reset');
var storageNames = ['allSubscribers', 'allArtists', 'allFeedback'];

// Check localStorage for all arrays saved in form-app.js
// Would be nice to refactor - perhaps declare variables before checking localStorage
for (var i = 0; i < storageNames.length; i++) {
  if (localStorage[storageNames[i]]) {
    switch (i) {
    case 0:
      var allSubscribers = JSON.parse(localStorage.allSubscribers);
      break;
    case 1:
      var allArtists = JSON.parse(localStorage.allArtists);
      break;
    case 2:
      var allFeedback = JSON.parse(localStorage.allFeedback);
      break;
    default:
      console.log('This was only built for 3 stored arrays.');
    }
  } else {
    switch (i) {
    case 0:
      var allSubscribers = [];
      break;
    case 1:
      var allArtists = [];
      break;
    case 2:
      var allFeedback = [];
      break;
    default:
      console.log('Seriously, this shouldn\'t have happened.');
    }
  }
}

// Render data, or if none, state there is no new data
allSubscribers.length > 0 ? renderSubs() : renderEmpty(subscriberSectionEl, 'subscribers');
allArtists.length > 0 ? renderArtists() : renderEmpty(artistSectionEl, 'artists suggested');
allFeedback.length > 0 ? renderFeedback() : renderEmpty(feedbackSectionEl, 'feedback offered');

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

function renderArtists() {
  for (var i = 0; i < allArtists.length; i++) {
    var listEl = document.createElement('ul');
    artistSectionEl.appendChild(listEl);
    var artistObject = allArtists[i];
    for (var key in artistObject) {
      var itemEl = document.createElement('li');
      itemEl.textContent = key.toUpperCase() + ': ' + artistObject[key];
      listEl.appendChild(itemEl);
    }
  }
}

function renderFeedback() {
  for (var i = 0; i < allFeedback.length; i++) {
    var listEl = document.createElement('ul');
    feedbackSectionEl.appendChild(listEl);
    var feedbackObject = allFeedback[i];
    for (var key in feedbackObject) {
      var itemEl = document.createElement('li');
      itemEl.textContent = key.toUpperCase() + ': ' + feedbackObject[key];
      listEl.appendChild(itemEl);
    }
  }
}

function renderEmpty(domElement, responseChecked) {
  console.log('No ' + responseChecked);
  var pEl = document.createElement('p');
  pEl.textContent = 'You have no new ' + responseChecked + ' at this time.';
  domElement.appendChild(pEl);
}

// Add a reset button to clear localStorage of past results and reload page
// Maybe use ROT13 "encryption"? lolwut
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

'use strict';

// Check localStorage for prior user signup - if not, initialize it with a data type of Array
if (localStorage.allSubscribers) {
  allSubscribers = JSON.parse(localStorage.allSubscribers);
  console.log('Retrieving from localStorage');
  console.log(allSubscribers);
} else {
  // If allProducts _is_ in localStorage, copy values accumulated over the past session
  console.log('There\'s no local storage!');
  var allSubscribers = [];
}

var thanksTimer; // used in signupRequested() to remove a fixed element after a delay
var genreList = ['Breaks', 'Drum and Bass', 'Dubstep', 'Hardcore', 'Hardstyle', 'House', 'Trance', 'Trap', 'Other'];
var interestName;

// Capture DOM elements
var mainEl = document.getElementById('main-hook');
var newsSignup = document.getElementById('newsletter');
newsSignup.addEventListener('submit', signupRequested, false);

// Render newsletter form

// Accept input

// Render feedback form

// Accept feedback input

// Remove element, return feedback

// Event listener for newsletter signup
function signupRequested(event) {
  event.preventDefault();
  event.stopPropagation();
  console.log(event.target);
  var name = event.target.subscriber_name.value;
  var email = event.target.subscriber_email.value;
  var interests = {};
  // populate interests with results from the signup form
  for (var i = 0; i < (genreList.length - 1); i++) {
    // last option in array is a string rather than boolean
    interestName = 'genre' + (i + 1);
    console.log(interestName);
    var interestValue = newsSignup.childNodes[1].elements[interestName].checked;
    console.log(interestValue);
    interests[interestName] = interestValue;
  }
  if (newsSignup.childNodes[1].elements['genre_other'].value) {
    interests['other'] = newsSignup.childNodes[1].elements['genre_other'].value;
  }
  // Fallback - keep this code in case something breaks in the loop above
  // interests.interest1 = event.target.int1.checked;
  // interests.interest2 = event.target.int2.checked;
  // interests.interest3 = event.target.int3.checked;
  // for (var i = 0; i < 3; i++) {
  //   var prop = eval('int' + (i + 1));
  //   interests[i] = event.target.prop.value;
  //   console.log(interests);
  // }

  console.log('Name is: ' + name);
  console.log('Email is: ' + email);
  console.log(interests);
  var subscriber = new Subscriber(name,email,interests);
  allSubscribers.push(subscriber);
  localStorage.allSubscribers = JSON.stringify(allSubscribers); // save change to localStorage
  event.target.reset(); // clear form before removing from DOM tree
  /* create a popover element (fixed position to be removed after a delay after submitting form)
    setTimeout window method found in a tutorial by Matt Doyle at http://www.elated.com/articles/javascript-timers-with-settimeout-and-setinterval/ */
  var pEl = document.createElement('p');
  pEl.setAttribute('class', 'overlay content');
  pEl.setAttribute('id', 'thank_you');
  pEl.textContent = 'Thank you!';
  mainEl.appendChild(pEl);
  event.target.remove();
  // set thanksTimer to restore form in 1.5 seconds
  thanksTimer = setTimeout('restoreForm()', 1500);
}

// Constructor for new newsletter subscriber
function Subscriber(name, email, interests) {
  this.name = name;
  this.email = email;
  this.interests = interests;
}

// To clear thanks and reappend form element to document
function restoreForm() {
  var pEl = document.getElementById('thank_you');
  pEl.remove();
  mainEl.insertBefore(newsSignup, document.getElementById('artist_form'));
}

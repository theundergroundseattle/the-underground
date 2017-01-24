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

// Render newsletter form

// Accept input
var newsSignup = document.getElementById('newsletter');
newsSignup.addEventListener('submit', signupRequested, false);

// Render feedback form

// Accept feedback input

// Remove element, return feedback

// Event listener for newsletter signup
function signupRequested(event) {
  event.preventDefault();
  event.stopPropagation();
  var name = event.target.subscriber_name.value;
  var email = event.target.subscriber_email.value;
  var interests = {};
  interests.interest1 = event.target.int1.checked;
  interests.interest2 = event.target.int2.checked;
  interests.interest3 = event.target.int3.checked;
  // for (var i = 0; i < 3; i++) {
  //   var prop = eval('int' + (i + 1));
  //   interests[i] = event.target.prop.value;
  //   console.log(interests);
  // }
  console.log('Name is: ' + name);
  console.log('Email is: ' + email);
  console.log(interests);
  allSubscribers.push(new Subscriber(name,email,interests));
  localStorage.allSubscribers = JSON.stringify(allSubscribers);
  event.target.reset();
  var pEl = document.createElement('p');
  pEl.textContent = 'Thank you!';
  newsSignup.appendChild(pEl);
}

// Constructor for new newsletter subscriber
function Subscriber(name, email, interests) {
  this.name = name;
  this.email = email;
  this.interests = interests;
}

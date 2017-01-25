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

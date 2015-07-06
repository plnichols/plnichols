/*

Javascript

*/


// app module
var app = {

  toggleClass: function(el, className) {
    if (el.classList) {
      el.classList.toggle(className);
    } else {
      var classes = el.className.split(' ');
      var existingIndex = classes.indexOf(className);

      if (existingIndex >= 0) {
        classes.splice(existingIndex, 1);
      } else {
        classes.push(className);
      }

      el.className = classes.join(' ');
    }
  },
  
  header: function() {
    var header = document.querySelectorAll('.header')[0];
    var hamburger = document.querySelectorAll('.hamburger')[0];

    hamburger.addEventListener('click', function(e){
      app.toggleClass(header, 'header--active');
      app.toggleClass(hamburger, 'hamburger--active');
    }, false);
  }
};


// init
app.header();


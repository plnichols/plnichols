/*

Javascript

*/


var app = (function() {

  // private
  // insert private vars and functions here
  // ...
  // ...


  // public
  return {
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


    removeClass: function(el, className) {
      if (el.classList) {
        el.classList.remove(className);
      }
      else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    },


    addClass: function(el, className) {
      if (el.classList) {
        el.classList.add(className);
      }
      else {
        el.className += ' ' + className;
      }
    },


    header: function() {

      // private
      var hamburger = document.querySelector('.hamburger');
      var header = document.querySelector('.header');

      hamburger.addEventListener('click', function(e) {
        toggleHeader();
      }, false);

      header.addEventListener('click', function(e) {
        if (e.target !== e.currentTarget) {
          toggleHeader();
        }
      }, false);

      function toggleHeader() {
        app.toggleClass(header, 'header--active');
        app.toggleClass(hamburger, 'hamburger--active');
      }

      // public
      // ...
    }
  }
})();


// init
app.header();


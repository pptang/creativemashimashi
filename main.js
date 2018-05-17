function scrollToContactSection() {
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
}

(function(window, document) {
  // Add scrolling animation
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      removeCurrentSelectedClass();
      this.classList.add('selected');
      var $href = this.getAttribute('href');
      document.querySelector($href).scrollIntoView({ behavior: 'smooth' });
    });
  });

  function removeCurrentSelectedClass() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.classList.remove('selected');
    });
  }
})(window, document);

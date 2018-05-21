function scrollToContactSection() {
  // document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  var scroll = new SmoothScroll()
  scroll.animateScroll(document.querySelector("#contact"))
}

;(function(window, document) {
  // Add scrolling animation
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener("click", function(e) {
      e.preventDefault()
      removeCurrentSelectedClass()
      this.classList.add("selected")
      // var $href = this.getAttribute('href');
      // document.querySelector($href).scrollIntoView({ behavior: 'smooth' });
    })
  })

  var scroll = new SmoothScroll('a[href*="#"]', {offset: 150})

  function removeCurrentSelectedClass() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.classList.remove("selected")
    })
  }

  document.addEventListener("scroll", function() {
    var $document = document.documentElement
    var $header = document.querySelector(".header")
    if ($document.scrollTop > 105) {
      $header.classList.add("blue-background")
    } else {
      $header.classList.remove("blue-background")
    }
  })
})(window, document)

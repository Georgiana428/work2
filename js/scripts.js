/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 



window.addEventListener('DOMContentLoaded', event => {


    var textArray = [
        "Bine ai venit!",
        "Vrei sa faci un tur al muzeului militar virtual?",
        "Intra la  sectiunea despre "
    ]
      
      // Current index of the text array
      var index = 0;
      
      // Function to update the text with fade-in and fade-out effect
      function updateText() {
        var element = document.querySelector('.masthead-subheading');
        element.classList.remove('show');
        setTimeout(function() {
          element.innerHTML = textArray[index];
          element.classList.add('show');
          index = (index + 1) % textArray.length;
        }, 500);
      }
      
      // Set initial text and start timer
      updateText();
      setInterval(updateText, 3000); // 5000 ms = 5 seconds
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

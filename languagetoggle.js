console.log('Scitor Academy');

document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    const htmlElement = document.documentElement;
    const heroImageHolder = document.querySelector('.hero-person-image-holder');
    const navbar = document.querySelector('.navbar'); // Select the navbar

    // Set default language to English
    let currentLanguage = 'en';

    languageToggle.addEventListener('click', function() {
        if (currentLanguage === 'en') {
            currentLanguage = 'ar';
            htmlElement.setAttribute('lang', 'ar');

            // Set RTL only for the body, NOT the navbar
            document.body.setAttribute('dir', 'rtl');
            
            languageToggle.textContent = 'English';
        } else {
            currentLanguage = 'en';
            htmlElement.setAttribute('lang', 'en');

            // Set LTR only for the body, NOT the navbar
            document.body.setAttribute('dir', 'ltr');

            languageToggle.textContent = 'العربية';
        }

        // Ensure navbar direction remains LTR
        if (navbar) {
            navbar.setAttribute('dir', 'ltr');
        }

        // Update content based on the selected language
        updateContent(currentLanguage);
    });

    function updateContent(language) {
        const elementsToTranslate = document.querySelectorAll('[data-en], [data-ar]');
        elementsToTranslate.forEach(element => {
            if (language === 'en' && element.dataset.en) {
                element.textContent = element.dataset.en;
            } else if (language === 'ar' && element.dataset.ar) {
                element.textContent = element.dataset.ar;
            }
        });

        // Update the position of hero-person-image-holder based on language
        if (heroImageHolder) {
            if (language === 'ar') {
                heroImageHolder.style.right = 'auto';
                heroImageHolder.style.left = '10%';
            } else {
                heroImageHolder.style.left = 'auto';
                heroImageHolder.style.right = '10%';
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
  const languageToggle = document.getElementById('language-toggle');
  const htmlElement = document.documentElement;
  
  // Select elements to move
  const heroImageWrapper = document.querySelector('.hero-image-wrapper');
  const firstHeroCircle = document.querySelector('.first-hero-circle');
  const secondHeroCircle = document.querySelector('.second-hero-circle');
  const thirdHeroCircle = document.querySelector('.third-hero-circle');

  let currentLanguage = 'en';

  languageToggle.addEventListener('click', function() {
      if (currentLanguage === 'en') {
          currentLanguage = 'ar';
          htmlElement.setAttribute('lang', 'ar');
          document.body.setAttribute('dir', 'rtl');
          languageToggle.textContent = 'English';

          // Move all elements to the left in Arabic mode
          moveElements('-65%');

      } else {
          currentLanguage = 'en';
          htmlElement.setAttribute('lang', 'en');
          document.body.setAttribute('dir', 'ltr');
          languageToggle.textContent = 'العربية';

          // Reset positions to default in English mode
          moveElements('0');
      }
  });

  function moveElements(position) {
      if (heroImageWrapper) heroImageWrapper.style.transform = `translateX(${position})`;
      if (firstHeroCircle) firstHeroCircle.style.transform = `translateX(${position})`;
      if (secondHeroCircle) secondHeroCircle.style.transform = `translateX(${position})`;
      if (thirdHeroCircle) thirdHeroCircle.style.transform = `translateX(${position})`;
  }
});



document.addEventListener("DOMContentLoaded", function () {
    // Get the current page URL path
    const currentPage = window.location.pathname.split("/").pop();

    // Get all nav links
    const navLinks = document.querySelectorAll(".nav-menu .navbar-link");

    navLinks.forEach(link => {
        // Get href of the link
        const linkHref = link.getAttribute("href");

        // Check if it matches the current page
        if (linkHref === currentPage) {
            link.classList.add("w--current"); // Add active class
        } else {
            link.classList.remove("w--current"); // Remove if not active
        }
    });
});



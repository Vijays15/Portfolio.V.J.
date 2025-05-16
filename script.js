var typed = new Typed('#element', {
    strings: ['Frontend Developer', '&amp; Java Developer.'],
    typeSpeed: 70,
  });


// Initialize ScrollReveal
const sr = ScrollReveal({
  distance: '50px',
  duration: 1000,
  delay: 200,
  reset: false  // Set true if you want it to repeat every scroll
});

// Navbar
sr.reveal('.logo', {
  origin: 'left'
});

// sr.reveal('.menu li', {
//   origin: 'top',
//   interval: 100
// });

// Bio Section
sr.reveal('.left', {
  origin: 'left'
});

sr.reveal('.mypic', {
  origin: 'right'
});

// Project Heading
sr.reveal('.project-heading', {
  origin: 'top'
});

// Projects
sr.reveal('.project-box', {
  origin: 'bottom',
  interval: 150
});

// Contact Section
sr.reveal('.contact h1', {
  origin: 'top'
});

sr.reveal('.contact-form input, .contact-form textarea, .contact-form button', {
  origin: 'bottom',
  interval: 100
});

// Footer
sr.reveal('.footer-left, .footer-right', {
  origin: 'bottom',
  interval: 100
});
// Animate Skills section
sr.reveal('.skills-heading', {
  origin: 'top'
});
sr.reveal('.skill-card', {
  origin: 'bottom',
  interval: 200
});




const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});


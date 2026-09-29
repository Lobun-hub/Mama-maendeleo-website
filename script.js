// script.js

// handle navbar transparency on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

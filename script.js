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

// Select the form by its ID (if present)
const form = document.getElementById('bookingForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent page reload

    // Collect form data
    const formData = new FormData(form);

    try {
      // Send the data to the server
      const response = await fetch('/book', {
        method: 'POST',
        body: new URLSearchParams(formData) // convert form data to URL-encoded format
      });

      // Get server response
      const result = await response.text();

      // Show confirmation to the user
      alert(result);

      // Reset the form
      form.reset();
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('There was an error sending your booking. Please try again.');
    }
  });
}
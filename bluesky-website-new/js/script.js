/*
 * Basic JavaScript for the BlueSky website.
 * Currently handles the contact form submission by preventing the default
 * browser behaviour and displaying a confirmation message to the user.  This
 * script can be extended to add interactivity such as collapsible menus or
 * dynamic content loading in the future.
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      // Collect form data
      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const message = form.querySelector('textarea[name="message"]').value.trim();
      // Display a simple confirmation message.  In a real application, you
      // would send this data to a server via fetch/XHR.
      alert(`Thank you, ${name || 'visitor'}! Your message has been received. We will get back to you soon.`);
      form.reset();
    });
  }
});
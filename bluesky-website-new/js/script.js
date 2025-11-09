/*
 * JavaScript for the BlueSky website.
 * Handles contact form submission and adds interactivity to the team page.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Contact form handler
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const message = form.querySelector('textarea[name="message"]').value.trim();
      alert(`Thank you, ${name || 'visitor'}! Your message has been received. We will get back to you soon.`);
      form.reset();
    });
  }

  // Interactive team cards: toggle description visibility on click
  const teamCards = document.querySelectorAll('.team-member');
  teamCards.forEach(card => {
    const description = card.querySelector('p');
    card.addEventListener('click', () => {
      if (description) {
        if (description.style.display === 'none' || description.style.display === '') {
          description.style.display = 'block';
        } else {
          description.style.display = 'none';
        }
      }
    });
  });
});

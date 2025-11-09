/*
 * JavaScript for the BlueSky website.
 * Handles contact form submission and adds interactivity to cards and team pages.
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

  // Interactive team cards: toggle description visibility and active styling on click
  const teamCards = document.querySelectorAll('.team-member');
  teamCards.forEach(card => {
    const description = card.querySelector('p');
    card.addEventListener('click', () => {
      if (description) {
        const isHidden = description.style.display === 'none' || description.style.display === '';
        description.style.display = isHidden ? 'block' : 'none';
      }
      card.classList.toggle('active');
    });
  });

  // Generic interactive cards: toggle active styling on click
  const allCards = document.querySelectorAll('.card');
  allCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('active');
    });
  });
});

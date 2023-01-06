// Selecting elements
const hamburgerBtn = document.querySelector('.hamburger-btn');
const headerNav = document.querySelector('.header-nav');
const overlay = document.querySelector('.overlay');

// Function to do not repeat code
const toggleClasses = function () {
  hamburgerBtn.classList.toggle('active');
  headerNav.classList.toggle('open');
  overlay.classList.toggle('hidden');
};

// AddEvent functionalities
hamburgerBtn.addEventListener('click', () => {
  toggleClasses();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && hamburgerBtn.classList.contains('active')) {
    toggleClasses();
  }
});

overlay.addEventListener('click', () => {
  toggleClasses();
});

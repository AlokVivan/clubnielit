const hamburger = document.querySelector('.hamburger');
const dropdownContent = document.querySelector('.dropdown-content');

hamburger.addEventListener('click', () => {
  dropdownContent.classList.toggle('active');
});
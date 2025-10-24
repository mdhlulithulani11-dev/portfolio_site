/* ====== Section Switching ====== */
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });

  // Show the selected section
  document.getElementById(sectionId).classList.add('active');

  // Update active navigation link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active-link');
  });

  // Highlight the correct navigation link
  const activeLink = document.querySelector(`.nav-links a[onclick="showSection('${sectionId}')"]`);
  if (activeLink) activeLink.classList.add('active-link');

  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ====== Theme Toggle (Dark/Light Mode) ====== */
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeBtn.textContent = document.body.classList.contains('dark-mode')
    ? '☀️'  // Light mode icon
    : '🌙'; // Dark mode icon
});


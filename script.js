// Show section and highlight active nav link
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');

  // Highlight nav link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active-link');
  });
  document.querySelector(`.nav-links a[onclick="showSection('${sectionId}')"]`).classList.add('active-link');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Dark/Light mode toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

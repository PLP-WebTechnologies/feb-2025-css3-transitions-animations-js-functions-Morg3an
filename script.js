// Store and retrieve theme preference from localStorage
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
  }
}

function toggleTheme() {
  body.classList.toggle('dark');
  const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
}

// Add animation on click
const image = document.getElementById('image');
image.addEventListener('click', () => {
  image.classList.add('animate');
  setTimeout(() => image.classList.remove('animate'), 1000);
});

themeToggle.addEventListener('click', toggleTheme);

// Load theme on page load
loadTheme();
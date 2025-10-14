// Scroll fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Changement d’image automatique
const images = document.querySelectorAll('.hero-images img');
let current = 0;
setInterval(() => {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}, 4000);

// Menu burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('header nav');
burger.addEventListener('click', () => nav.classList.toggle('active'));

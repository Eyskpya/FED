// Simple, easy-to-read vanilla carousel for pokemon.html
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.poke-carousel');

  const slides = Array.from(carousel.querySelectorAll('.poke-slide'));
  const prevBtn = carousel.querySelector('.poke-prev');
  const nextBtn = carousel.querySelector('.poke-next');

  let current = 0;
  const total = slides.length;

  function show(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
      s.style.opacity = i === index ? '1' : '0';
    });
  }

  function goTo(index) {
    current = (index + total) % total;
    show(current);
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  nextBtn.addEventListener('click', () => { next();});
  prevBtn.addEventListener('click', () => { prev();});

  // Initialize
  show(0);
});

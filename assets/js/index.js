document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.hero-image');
  const dots = document.querySelectorAll('.dot');
  let current = 0;

  function showSlide(index) {
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    images[index].classList.add('active');
    dots[index].classList.add('active');
    current = index;
  }

  function nextSlide() {
    const next = (current + 1) % images.length;
    showSlide(next);
  }

  setInterval(nextSlide, 4000);

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      showSlide(Number(dot.dataset.index));
    });
  });
});
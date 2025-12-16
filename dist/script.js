const card = document.getElementById('card');
const form = document.getElementById('form');

let allowRotate = true;

form.addEventListener('mouseenter', () => allowRotate = false);
form.addEventListener('mouseleave', () => allowRotate = true);

document.addEventListener('mousemove', (e) => {
  if (!allowRotate) return;

  const x = (window.innerWidth / 2 - e.clientX) / 30;
  const y = (window.innerHeight / 2 - e.clientY) / 30;

  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

document.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateY(0deg) rotateX(0deg)';
});

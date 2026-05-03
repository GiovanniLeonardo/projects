// SCROLL REVEAL
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add('active');
    }
  });
});

// PARALLAX
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  document.querySelector('.hero').style.transform =
    `translateY(${scroll * 0.2}px)`;
});

// CURSOR GLOW
const cursor = document.createElement('div');
cursor.style.width = "20px";
cursor.style.height = "20px";
cursor.style.borderRadius = "50%";
cursor.style.background = "white";
cursor.style.position = "fixed";
cursor.style.pointerEvents = "none";
cursor.style.mixBlendMode = "difference";
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// PARTICLE BACKGROUND (lightweight)
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = -3;

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.y -= 0.3;
    if (p.y < 0) p.y = canvas.height;

    ctx.fillStyle = "white";
    ctx.fillRect(p.x, p.y, p.size, p.size);
  });

  requestAnimationFrame(animate);
}

animate();

// Custom cursor
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursor-trail');
let mx = 0, my = 0;
document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = (mx - 6) + 'px';
    cursor.style.top = (my - 6) + 'px';
});
setInterval(() => {
    trail.style.left = (mx - 18) + 'px';
    trail.style.top = (my - 18) + 'px';
}, 60);

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
        }
    });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// Hover cursor scale
document.querySelectorAll('a, button, .project-card, .skill-category, .exp-item').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(2.5)');
    el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
});


// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

document.querySelectorAll("#mobileMenu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

  // ── Theme toggle ──
  const root = document.documentElement;
  const btn  = document.getElementById('themeToggle');
  let isDark = true;
  // Persist preference
  const saved = localStorage.getItem('theme');
  if (saved === 'light') { isDark = false; root.setAttribute('data-theme','light'); btn.textContent = '🌙'; }

  btn.addEventListener('click', () => {
    isDark = !isDark;
    const theme = isDark ? 'dark' : 'light';
    root.setAttribute('data-theme', theme);
    btn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', theme);
  });
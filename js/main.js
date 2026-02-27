// ===== NAV =====
const navToggle = document.querySelector('.nav__toggle');
const navLinks  = document.querySelector('.nav__links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Mobile dropdown toggles
document.querySelectorAll('.nav__item > .nav__link').forEach(link => {
  const dropdown = link.nextElementSibling;
  if (!dropdown) return;
  link.addEventListener('click', e => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      link.parentElement.classList.toggle('open');
    }
  });
});

// Close nav on outside click
document.addEventListener('click', e => {
  if (!e.target.closest('.nav') && navLinks) {
    navLinks.classList.remove('open');
  }
});

// ===== FADE IN ON SCROLL =====
const faders = document.querySelectorAll('.fade-in');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  faders.forEach(el => observer.observe(el));
} else {
  faders.forEach(el => el.classList.add('visible'));
}

// ===== ACTIVE NAV LINK =====
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__link, .nav__dropdown a').forEach(link => {
  const href = link.getAttribute('href');
  if (href && (href === currentPath || href === './' + currentPath)) {
    link.classList.add('active');
  }
});

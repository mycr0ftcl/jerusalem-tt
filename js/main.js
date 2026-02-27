// Mark JS as loaded — enables CSS animations only when JS is available
document.documentElement.classList.add('js-loaded');

// ===== NAV TOGGLE (mobile) =====
const navToggle = document.querySelector('.nav__toggle');
const navLinks  = document.querySelector('.nav__links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Mobile: tap to open dropdowns
document.querySelectorAll('.nav__item > .nav__link').forEach(link => {
  if (!link.nextElementSibling) return;
  link.addEventListener('click', e => {
    if (window.innerWidth <= 820) {
      e.preventDefault();
      link.parentElement.classList.toggle('open');
    }
  });
});

document.addEventListener('click', e => {
  if (!e.target.closest('.nav') && navLinks) navLinks.classList.remove('open');
});

// ===== FADE UP ON SCROLL =====
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });
  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.fade-up').forEach(el => el.classList.add('in'));
}

// ===== ACTIVE NAV =====
const current = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__link, .nav__dropdown a').forEach(a => {
  if (a.getAttribute('href') === current || a.getAttribute('href') === './' + current) a.classList.add('active');
});

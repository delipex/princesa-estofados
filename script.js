/* ═══════════════════════════════════════════════════════
   PRINCESA ESTOFADOS — script.js
   Interatividade completa da página principal
═══════════════════════════════════════════════════════ */

/* ── Loading screen ── */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('loaded');
    setTimeout(() => loader.remove(), 600);
  }
});

/* ── Header scroll ── */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
  toggleBackToTop();
});

/* ── Mobile menu ── */
const menuBtn = document.getElementById('menuBtn');
const nav     = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.classList.toggle('active', open);
});
nav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', false);
  });
});
// Fechar menu ao clicar fora
document.addEventListener('click', e => {
  if (!header.contains(e.target)) {
    nav.classList.remove('open');
    menuBtn.classList.remove('active');
  }
});

/* ── Active nav link por seção ── */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link[href^="#"]');

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => {
          const isActive = a.getAttribute('href') === `#${entry.target.id}`;
          a.classList.toggle('nav-active', isActive);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);
sections.forEach(s => sectionObserver.observe(s));

/* ── Scroll reveal ── */
const revealEls = document.querySelectorAll(
  '.service-card, .dep-card, .gallery-item, .number-item, .diff-list li, .section-header'
);
revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  entries => entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  }),
  { threshold: 0.1 }
);
revealEls.forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 90}ms`;
  revealObserver.observe(el);
});

/* ── Contadores animados ── */
function animateCounter(el) {
  const target   = +el.dataset.target;
  const duration = 2000;
  const start    = performance.now();
  const easeOut  = t => 1 - Math.pow(1 - t, 3);

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(easeOut(progress) * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObserver.unobserve(e.target);
    }
  }),
  { threshold: 0.6 }
);
document.querySelectorAll('.number-val').forEach(el => counterObserver.observe(el));

/* ── Back to top ── */
const btt = document.getElementById('backToTop');
function toggleBackToTop() {
  if (btt) btt.classList.toggle('visible', window.scrollY > 400);
}
if (btt) {
  btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── Floating WhatsApp pulse ── */
const wppFloat = document.getElementById('wppFloat');
if (wppFloat) {
  setTimeout(() => wppFloat.classList.add('pulse-ready'), 3000);
}

/* ── LGPD Banner ── */
const lgpd = document.getElementById('lgpdBanner');
const lgpdBtn = document.getElementById('lgpdAccept');
if (lgpd && lgpdBtn) {
  if (!localStorage.getItem('lgpd_ok')) {
    setTimeout(() => lgpd.classList.add('visible'), 1800);
  }
  lgpdBtn.addEventListener('click', () => {
    lgpd.classList.remove('visible');
    localStorage.setItem('lgpd_ok', '1');
  });
}

/* ── Parallax suave no hero ── */
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroBg.style.transform = `scale(1) translateY(${y * 0.25}px)`;
    }
  }, { passive: true });
}

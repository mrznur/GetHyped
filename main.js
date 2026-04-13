// ========================================
// GET HYPED - Homepage JavaScript
// ========================================

// ---------- DOM ELEMENTS ----------
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');
const header = document.getElementById('header');

// ---------- MOBILE MENU ----------
function openMobileMenu() {
  mobileMenu.classList.add('active');
  mobileMenu.setAttribute('aria-hidden', 'false');
  hamburgerBtn.setAttribute('aria-expanded', 'true');
  hamburgerBtn.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  mobileMenu.classList.remove('active');
  mobileMenu.setAttribute('aria-hidden', 'true');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  hamburgerBtn.classList.remove('is-active');
  document.body.style.overflow = '';
}

hamburgerBtn.addEventListener('click', () => {
  if (mobileMenu.classList.contains('active')) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});

mobileMenuClose.addEventListener('click', closeMobileMenu);

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// Close on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
    closeMobileMenu();
  }
});

// Close menu on clicking CTA
const mobileMenuCta = document.querySelector('.mobile-menu__cta');
if (mobileMenuCta) {
  mobileMenuCta.addEventListener('click', closeMobileMenu);
}


// ---------- HEADER SCROLL EFFECT ----------
function handleHeaderScroll() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleHeaderScroll, { passive: true });
handleHeaderScroll();


// ---------- SCROLL ANIMATIONS ----------
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -60px 0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Apply fade-in to sections
document.querySelectorAll('.about__heading, .about__content, .work__header, .brands__heading, .cta__heading, .cta__buttons').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Stagger work cards
document.querySelectorAll('.work-card').forEach((card, i) => {
  card.classList.add('fade-in');
  card.style.transitionDelay = `${i * 0.15}s`;
  observer.observe(card);
});


// ---------- SMOOTH SCROLL FOR ANCHOR LINKS ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


// ---------- PREVENT DEFAULT ON SAME-PAGE LINKS ----------
document.querySelectorAll('a[href="/"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

'use strict';
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
function setMenu(open) {
  mobileNav.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
}
menuButton.addEventListener('click', () => setMenu(mobileNav.hidden));
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileNav.hidden) { setMenu(false); menuButton.focus(); }
});
window.matchMedia('(min-width: 851px)').addEventListener('change', event => { if (event.matches) setMenu(false); });
document.getElementById('year').textContent = new Date().getFullYear();

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const videos = [...document.querySelectorAll('.autoplay-video')];
function playVideo(video) {
  if (reducedMotion.matches || document.hidden) return;
  video.muted = true;
  video.defaultMuted = true;
  const attempt = video.play();
  if (attempt && typeof attempt.catch === 'function') attempt.catch(() => video.classList.remove('is-playing'));
}
videos.forEach(video => {
  video.muted = true;
  video.defaultMuted = true;
  video.addEventListener('playing', () => video.classList.add('is-playing'));
  video.addEventListener('error', () => video.classList.remove('is-playing'));
  if (reducedMotion.matches) { video.pause(); video.removeAttribute('autoplay'); }
});
const videoObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.dataset.inView = String(entry.isIntersecting);
    if (entry.isIntersecting) playVideo(entry.target);
    else entry.target.pause();
  });
}, { threshold: 0.1 }) : null;
videos.forEach(video => {
  if (videoObserver) videoObserver.observe(video);
  else { video.dataset.inView = 'true'; playVideo(video); }
});
function resumeVisibleVideos() {
  videos.filter(video => video.dataset.inView === 'true').forEach(playVideo);
}
document.addEventListener('visibilitychange', () => {
  if (document.hidden) videos.forEach(video => video.pause());
  else resumeVisibleVideos();
});
document.addEventListener('pointerdown', resumeVisibleVideos, { once: true, passive: true });
reducedMotion.addEventListener('change', () => {
  if (reducedMotion.matches) videos.forEach(video => { video.pause(); video.classList.remove('is-playing'); });
  else resumeVisibleVideos();
});

// Progressive enhancement: both original photographs stay visible without JS.
document.querySelectorAll('.comparison').forEach(comparison => {
  const input = comparison.querySelector('.compare-input');
  if (!input) return;
  input.hidden = false;
  comparison.classList.add('is-interactive');
  function updateComparison() {
    comparison.style.setProperty('--split', `${input.value}%`);
    input.setAttribute('aria-valuetext', `${input.value}% da fotografia antes`);
  }
  input.addEventListener('input', updateComparison);
  updateComparison();
});

document.querySelectorAll('.comparison-instruction').forEach(el => { el.hidden = false; });

const header = document.querySelector('.site-header');
let scrollPending = false;
function updateHeader() {
  header.classList.toggle('is-scrolled', window.scrollY > 35);
  scrollPending = false;
}
updateHeader();
window.addEventListener('scroll', () => {
  if (!scrollPending) { scrollPending = true; requestAnimationFrame(updateHeader); }
}, { passive: true });

// Animate visible content rather than hiding sections until an observer runs.
const decorativeAnimations = new Set();
function animateDecoratively(element, frames, options) {
  const animation = element.animate(frames, options);
  decorativeAnimations.add(animation);
  animation.finished.then(() => decorativeAnimations.delete(animation), () => decorativeAnimations.delete(animation));
  return animation;
}
reducedMotion.addEventListener('change', () => {
  if (reducedMotion.matches) decorativeAnimations.forEach(animation => animation.cancel());
});
if (!reducedMotion.matches && 'IntersectionObserver' in window && Element.prototype.animate) {
  const targets = document.querySelectorAll('.section-heading, .about-copy, .about-photo, .service-card, .result-card, .steps li, .action-copy, .action-media, .benefits-heading, .benefit-grid article, .trust-copy, .trust-mark, .contact-inner');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      revealObserver.unobserve(entry.target);
      if (reducedMotion.matches) return;
      animateDecoratively(entry.target, [
        { opacity: 0, transform: 'translateY(18px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], { duration: 800, easing: 'cubic-bezier(.22,1,.36,1)' });
      const heading = entry.target.querySelector('h2');
      const text = entry.target.querySelector('h2 + p');
      if (heading && text) animateDecoratively(text, [{ opacity: 0 }, { opacity: 1 }], { duration: 650, delay: 100, easing: 'ease-out' });
    });
  }, { threshold: 0.08 });
  targets.forEach(target => revealObserver.observe(target));
  const heroCopy = document.querySelector('.hero-copy');
  animateDecoratively(heroCopy, [{ opacity: .2, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }], {
    duration: 900,
    delay: document.documentElement.classList.contains('intro-skip') ? 0 : 950,
    easing: 'cubic-bezier(.22,1,.36,1)'
  });
}

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

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Nav toggle (mobile) =====
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mainNav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

// ===== Gallery data (18 real project photos) =====
const GALLERY = [
  { src: 'project-1.jpg',  tag: 'Industrial CCTV mast install' },
  { src: 'project-2.jpg',  tag: 'Commercial facade camera works' },
  { src: 'project-3.jpg',  tag: 'Solar-powered camera pole' },
  { src: 'project-4.jpg',  tag: 'Field terminal box wiring' },
  { src: 'project-5.jpg',  tag: 'Perimeter site preparation' },
  { src: 'project-6.jpg',  tag: 'Kiosk system installation' },
  { src: 'project-7.jpg',  tag: 'Rack cabinet mounting' },
  { src: 'project-8.jpg',  tag: 'Network cable testing, Putra Square' },
  { src: 'project-9.jpg',  tag: 'Elevated platform camera works' },
  { src: 'project-10.jpg', tag: 'Perimeter fence camera install' },
  { src: 'project-11.jpg', tag: 'Smart parking barrier system' },
  { src: 'project-12.jpg', tag: 'Server rack cable termination' },
  { src: 'project-13.jpg', tag: 'Industrial plant camera coverage' },
  { src: 'project-14.jpg', tag: 'Boom gate access control' },
  { src: 'project-15.jpg', tag: 'Vehicle access barrier system' },
  { src: 'project-16.jpg', tag: 'Site cutting & groundworks' },
  { src: 'project-17.jpg', tag: 'Wall-mounted rack enclosure' },
  { src: 'project-18.jpg', tag: 'CCTV monitor & NVR cabinet' },
];

// ===== Build masonry gallery =====
const masonry = document.getElementById('masonry');
GALLERY.forEach((item, i) => {
  const fig = document.createElement('figure');
  fig.innerHTML = `<img src="${item.src}" alt="${item.tag}" loading="lazy"><figcaption>${item.tag}</figcaption>`;
  fig.addEventListener('click', () => openLightbox(item.src, item.tag));
  masonry.appendChild(fig);
});

// ===== Lightbox =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
function openLightbox(src, alt){
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add('open');
}
function closeLightbox(){
  lightbox.classList.remove('open');
  lightboxImg.src = '';
}
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

// ===== Hero monitor wall (signature element) =====
const wallGrid = document.getElementById('wallGrid');
const wallTiles = GALLERY.slice(0, 6);
wallTiles.forEach((item, i) => {
  const tile = document.createElement('div');
  tile.className = 'wall-tile';
  tile.style.setProperty('--d', i);
  tile.innerHTML = `
    <img src="${item.src}" alt="">
    <span class="tile-scan"></span>
    <span class="tile-tag">CAM ${String(i + 1).padStart(2, '0')}</span>
  `;
  wallGrid.appendChild(tile);
});

// Live Malaysia time clock
const wallClock = document.getElementById('wallClock');
function tickClock(){
  const now = new Date();
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kuala_Lumpur',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
  }).formatToParts(now);
  const map = {};
  parts.forEach(p => map[p.type] = p.value);
  wallClock.textContent = `${map.hour}:${map.minute}:${map.second} MYT`;
}
tickClock();
setInterval(tickClock, 1000);

// ===== Quote form -> WhatsApp handoff =====
const quoteForm = document.getElementById('quoteForm');
quoteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(quoteForm);
  const name = data.get('name') || '';
  const phone = data.get('phone') || '';
  const service = data.get('service') || '';
  const message = data.get('message') || '';

  const text =
`Hi AP Maju Jaya Trading, I'd like to request a quote.

Name: ${name}
Phone: ${phone}
Service needed: ${service}
Details: ${message || '-'}`;

  const waNumber = '60176204655';
  const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
});

// ===== Reveal-on-scroll for cards/sections =====
const revealTargets = document.querySelectorAll('.service-card, .why-card, .cred-card, .masonry figure');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealTargets.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = `opacity 0.5s ease ${(i % 6) * 0.05}s, transform 0.5s ease ${(i % 6) * 0.05}s`;
  io.observe(el);
});

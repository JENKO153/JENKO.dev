/* =========================================================
   JENKO SITE — main.js
   Shared JS for: index.html, devlog.html, about.html, projects.html
========================================================= */

/* =========================
   Helpers
========================= */
function qs(sel, root = document){ return root.querySelector(sel); }
function qsa(sel, root = document){ return Array.from(root.querySelectorAll(sel)); }

/* =========================
   Mobile menu toggle
========================= */
const menuToggle = qs('#menu-toggle');
const drawer = qs('#mobile-drawer');

function setDrawer(open){
  if(!menuToggle || !drawer) return;

  const drawerPanel = qs('.drawer-panel', drawer);

  if(open){
    menuToggle.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    drawer.classList.add('active');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Optional: focus first link for accessibility
    const firstLink = drawerPanel ? qs('a', drawerPanel) : null;
    if(firstLink) firstLink.focus();
  } else {
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('active');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

if(menuToggle && drawer){
  menuToggle.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('active');
    setDrawer(!isOpen);
  });

  // Click outside panel closes
  drawer.addEventListener('click', (e) => {
    if(e.target === drawer) setDrawer(false);
  });

  // Clicking any drawer link closes
  qsa('a', drawer).forEach(link => {
    link.addEventListener('click', () => setDrawer(false));
  });
}

/* =========================
   Devlog modal (index/devlog)
========================= */
function openDevlogModal(entry, ev){
  // If you clicked an image, don't open modal (let lightbox handle it)
  if(ev && ev.target && ev.target.tagName === 'IMG') return;

  const modal = qs('#devlog-modal');
  const modalBody = qs('#devlog-modal-body');
  if(!modal || !modalBody || !entry) return;

  // Clone the entry so we can show "full post" inside the modal
  const content = entry.cloneNode(true);

  // Remove interactive attributes from clone
  content.removeAttribute('onclick');
  content.removeAttribute('onkeydown');
  content.removeAttribute('role');
  content.removeAttribute('tabindex');

  // Remove the hint from modal (optional)
  const hint = qs('.hint', content);
  if(hint) hint.remove();

  // Ensure images in modal open the lightbox
  qsa('img', content).forEach(img => {
    img.onclick = (e) => openLightbox(img, e);
  });

  modalBody.innerHTML = content.innerHTML;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function devlogKeyOpen(entry, ev){
  if(!ev) return;
  if(ev.key === 'Enter' || ev.key === ' '){
    ev.preventDefault();
    openDevlogModal(entry, ev);
  }
}

function closeDevlogModal(ev){
  const modal = qs('#devlog-modal');
  if(!modal) return;

  // If click is inside content, ignore
  if(ev && ev.target && ev.currentTarget && ev.target !== ev.currentTarget) return;

  modal.classList.remove('active');

  // Only unlock scroll if lightbox isn't open
  const lightbox = qs('.lightbox');
  if(!lightbox || !lightbox.classList.contains('active')){
    document.body.style.overflow = '';
  }
}

// Wire up entries automatically (preferred over inline attributes)
function wireDevlogEntries(){
  const entries = qsa('.devlog-entry');
  if(entries.length === 0) return;

  entries.forEach(entry => {
    // Avoid double binding if you also left inline handlers
    if(entry.dataset.wired === '1') return;
    entry.dataset.wired = '1';

    entry.addEventListener('click', (e) => openDevlogModal(entry, e));
    entry.addEventListener('keydown', (e) => devlogKeyOpen(entry, e));
  });
}

wireDevlogEntries();

/* =========================
   Lightbox (shared)
========================= */
function openLightbox(img, ev){
  if(ev) ev.stopPropagation();

  const lightbox = qs('.lightbox');
  const lightboxImg = qs('#lightbox-img');
  if(!lightbox || !lightboxImg || !img) return;

  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt || 'Expanded view';
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(ev){
  if(ev) ev.stopPropagation();

  const lightbox = qs('.lightbox');
  if(!lightbox) return;

  lightbox.classList.remove('active');

  // If devlog modal is open, keep scroll locked
  const modal = qs('#devlog-modal');
  if(!modal || !modal.classList.contains('active')){
    document.body.style.overflow = '';
  }
}

// If your lightbox has onclick="closeLightbox(event)" it will still work.
// But we also wire it if it exists:
const lb = qs('.lightbox');
if(lb){
  lb.addEventListener('click', (e) => closeLightbox(e));
}

/* =========================
   Escape key closes things
========================= */
document.addEventListener('keydown', (e) => {
  if(e.key !== 'Escape') return;

  // Close lightbox
  const lightbox = qs('.lightbox');
  if(lightbox && lightbox.classList.contains('active')){
    closeLightbox();
    return; // priority to lightbox
  }

  // Close devlog modal
  const modal = qs('#devlog-modal');
  if(modal && modal.classList.contains('active')){
    closeDevlogModal();
    return;
  }

  // Close drawer
  if(drawer && drawer.classList.contains('active')){
    setDrawer(false);
  }
});

/* =========================
   Smooth scroll (only for hash links on same page)
   - Works on index.html for #sections
   - Will not break normal page navigation like devlog.html
========================= */
qsa('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(!href || href === '#') return;

    const target = qs(href);
    if(!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* =========================
   Expose functions for inline HTML (if you kept any)
========================= */
window.openDevlogModal = openDevlogModal;
window.closeDevlogModal = closeDevlogModal;
window.devlogKeyOpen = devlogKeyOpen;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.setDrawer = setDrawer;

/* * AI-assisted: GitHub Copilot
 * Tool: GitHub Copilot
 * Date: 2025-11-26
 * Summary of assistance: Generated initial implementation of card click handlers, lightbox modal behavior, and keyboard support.
 * Prompts / notes (short): "How to add click handlers to open achievement lightbox and open project links in new tab. How to add keyboard support and Escape to close."
 * Human review: Reviewed, adjusted, and edited by the repository owner and tested in browser.
 */
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
  });
  // keyboard support for Enter
  toggleButton.addEventListener('keydown', (e) => { if (e.key === 'Enter') toggleButton.click(); });
}

// Card interactions: achievement preview (lightbox) and project redirect
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxBackdrop = document.getElementById('lightbox-backdrop');

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt || 'Preview';
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  if (!lightbox || !lightboxImg) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
}

// Achievement cards
document.querySelectorAll('.card.achievement-card').forEach(card => {
  card.addEventListener('click', () => {
    const img = card.dataset.img || (card.querySelector('.card-img') && card.querySelector('.card-img').src);
    if (img) openLightbox(img, (card.querySelector('.card-label') && card.querySelector('.card-label').textContent));
  });
  card.tabIndex = 0;
  card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); } });
});

// Project cards
document.querySelectorAll('.card.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const href = card.dataset.href;
    if (href) {
      window.open(href, '_blank', 'noopener');
    }
  });
  card.tabIndex = 0;
  card.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); card.click(); } });
});

// Lightbox close handlers
if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

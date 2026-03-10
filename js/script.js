document.addEventListener('DOMContentLoaded', () => {

  /* ── Year ── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ══════════════════════════════════
     THEME
  ══════════════════════════════════ */
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function applyTheme(theme) {
    root.classList.toggle('dark', theme === 'dark');
    if (themeToggle) themeToggle.setAttribute('aria-pressed', theme === 'dark');
  }

  const stored = localStorage.getItem('theme');
  applyTheme(stored || (prefersDark.matches ? 'dark' : 'light'));

  themeToggle?.addEventListener('click', () => {
    root.classList.add('theme-transition');
    setTimeout(() => root.classList.remove('theme-transition'), 450);
    const nowDark = root.classList.toggle('dark');
    localStorage.setItem('theme', nowDark ? 'dark' : 'light');
    themeToggle.setAttribute('aria-pressed', nowDark);
  });

  prefersDark.addEventListener?.('change', e => {
    if (!localStorage.getItem('theme')) applyTheme(e.matches ? 'dark' : 'light');
  });

  /* ══════════════════════════════════
     SCROLL PROGRESS BAR
  ══════════════════════════════════ */
  const progressBar = document.getElementById('progress-bar');
  function updateProgress() {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
    if (progressBar) progressBar.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });

  /* ══════════════════════════════════
     ACTIVE NAV ON SCROLL
  ══════════════════════════════════ */
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav a[data-nav]');

  function updateNav() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 130) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ══════════════════════════════════
     MOBILE MENU
  ══════════════════════════════════ */
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  menuToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', open);
  });

  nav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle?.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', false);
    });
  });

  /* ══════════════════════════════════
     SMOOTH SCROLL
  ══════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ══════════════════════════════════
     TYPING EFFECT
  ══════════════════════════════════ */
  const roles = [
    'building interfaces',
    'animating interactions',
    'optimizing performance',
    'leading projects',
    'improving accessibility'
  ];
  const typingEl = document.getElementById('typing');
  let idx = 0, char = 0, forward = true;

  function step() {
    if (!typingEl) return;
    const word = roles[idx];
    if (forward) {
      char++;
      if (char > word.length) { forward = false; setTimeout(step, 1400); return; }
    } else {
      char--;
      if (char === 0) { forward = true; idx = (idx + 1) % roles.length; }
    }
    typingEl.textContent = word.slice(0, char);
    setTimeout(step, forward ? 80 : 45);
  }
  if (typingEl) step();

  /* ══════════════════════════════════
     REVEAL ON SCROLL
  ══════════════════════════════════ */
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  /* ══════════════════════════════════
     ANIMATED STAT COUNTERS
  ══════════════════════════════════ */
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1600;
    const start = performance.now();

    function tick(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      el.textContent = Math.round(eased * target) + '+';
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target + '+';
    }
    requestAnimationFrame(tick);
  }

  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.count-up').forEach(el => counterObs.observe(el));

  /* ══════════════════════════════════
     CURSOR GLOW (desktop only)
  ══════════════════════════════════ */
  const cursorGlow = document.getElementById('cursor-glow');
  if (cursorGlow && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let gx = window.innerWidth / 2;
    let gy = window.innerHeight / 2;
    let cx = gx, cy = gy;

    document.addEventListener('mousemove', e => {
      gx = e.clientX;
      gy = e.clientY;
    }, { passive: true });

    function lerpGlow() {
      cx += (gx - cx) * 0.08;
      cy += (gy - cy) * 0.08;
      cursorGlow.style.left = cx + 'px';
      cursorGlow.style.top  = cy + 'px';
      requestAnimationFrame(lerpGlow);
    }
    lerpGlow();
  } else if (cursorGlow) {
    cursorGlow.style.display = 'none';
  }

  /* ══════════════════════════════════
     HERO MOUSE PARALLAX (orbs)
  ══════════════════════════════════ */
  const orbs = document.querySelectorAll('.orb');
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.addEventListener('mousemove', e => {
      const cx = window.innerWidth  / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      orbs.forEach((orb, i) => {
        const depth = (i + 1) * 10;
        orb.style.transform = `translate(${dx * depth}px, ${dy * depth}px)`;
      });
    }, { passive: true });
  }

  /* ══════════════════════════════════
     CARD TILT (subtle 3-D on hover)
  ══════════════════════════════════ */
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect   = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 10;
        const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -10;
        card.style.transform = `translateY(-8px) scale(1.01) rotateX(${y}deg) rotateY(${x}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* ══════════════════════════════════
     KEYBOARD ACCESSIBILITY
  ══════════════════════════════════ */
  document.body.addEventListener('keydown', e => {
    if (e.key === 'Tab') document.documentElement.classList.add('show-focus');
  });

});

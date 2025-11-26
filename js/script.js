// Small JS for interactions: typing effect, mobile menu toggle, and scroll reveal

document.addEventListener('DOMContentLoaded', ()=>{
  // set year
  const y = new Date().getFullYear();
  document.getElementById('year').textContent = y;

  // Theme: initialize, toggle, persist and animate
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const prefersDarkMQ = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

  function applyTheme(theme){
    root.classList.toggle('dark', theme === 'dark');
    if(themeToggle) themeToggle.setAttribute('aria-pressed', theme === 'dark');
    if(themeToggle){
      // keep icon classes in sync (for any CSS that uses them)
      theme === 'dark' ? themeToggle.classList.add('dark') : themeToggle.classList.remove('dark');
    }
  }

  // read stored preference
  const storedTheme = localStorage.getItem('theme');
  if(storedTheme){
    applyTheme(storedTheme);
  } else if(prefersDarkMQ && prefersDarkMQ.matches){
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  // toggle with animated transition
  function toggleTheme(){
    // enable smooth transitions briefly
    root.classList.add('theme-transition');
    window.setTimeout(()=>root.classList.remove('theme-transition'), 420);

    const nowDark = root.classList.toggle('dark');
    localStorage.setItem('theme', nowDark ? 'dark' : 'light');
    if(themeToggle) themeToggle.setAttribute('aria-pressed', nowDark);
    if(themeToggle){ nowDark ? themeToggle.classList.add('dark') : themeToggle.classList.remove('dark'); }
  }

  themeToggle && themeToggle.addEventListener('click', toggleTheme);

  // If user hasn't set an explicit preference, respond to system changes
  if(prefersDarkMQ && prefersDarkMQ.addEventListener){
    prefersDarkMQ.addEventListener('change', (e)=>{
      if(!localStorage.getItem('theme')){
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  menuToggle && menuToggle.addEventListener('click', ()=>{
    nav.classList.toggle('open');
    menuToggle.classList.toggle('open');
    // update aria-expanded for screen readers
    const expanded = nav.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', expanded);
  });

  // Smooth links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      if(!href || href === '#') return;
      const target = document.querySelector(href);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        // close mobile menu
        if(nav.classList.contains('open')){nav.classList.remove('open');menuToggle.classList.remove('open')}
      }
    })
  })

  // Typing effect
  const roles = ['building interfaces', 'animating interactions', 'optimizing performance', 'improving accessibility'];
  const el = document.getElementById('typing');
  let idx = 0;
  let char = 0;
  let forward = true;
  function step(){
    const current = roles[idx];
    if(forward){
      char++;
      if(char > current.length){
        forward = false;
        setTimeout(step, 1000);
        return;
      }
    } else {
      char--;
      if(char === 0){
        forward = true;
        idx = (idx+1) % roles.length;
      }
    }
    el.textContent = current.slice(0,char);
    setTimeout(step, forward ? 80 : 40);
  }
  if(el) step();

  // Reveal on scroll using IntersectionObserver
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    })
  }, {threshold:0.12});

  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

  // small accessibility: focus outlines for keyboard users
  document.body.addEventListener('keydown', (e)=>{
    if(e.key === 'Tab') document.documentElement.classList.add('show-focus');
  })
});

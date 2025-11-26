document.addEventListener('DOMContentLoaded', ()=>{
  const y = new Date().getFullYear();
  document.getElementById('year').textContent = y;

  // Theme toggle 
  const toggleButton = document.getElementById('theme-toggle') || document.getElementById('themeToggle');
  const body = document.body;
  toggleButton && toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
  });

  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  menuToggle && menuToggle.addEventListener('click', ()=>{
    nav.classList.toggle('open');
    menuToggle.classList.toggle('open');
    const expanded = nav.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', expanded);
  });

  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      if(!href || href === '#') return;
      const target = document.querySelector(href);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
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

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    })
  }, {threshold:0.12});

  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

  document.body.addEventListener('keydown', (e)=>{
    if(e.key === 'Tab') document.documentElement.classList.add('show-focus');
  })
});

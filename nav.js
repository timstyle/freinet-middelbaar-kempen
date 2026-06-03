// Freinet Middelbaar Kempen — gedeelde JS
(function () {
  document.documentElement.classList.add('js-on');

  // Actieve pagina highlighten
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Mobile menu toggle
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Contactformulier — verstuurd via Formspree

  // Nieuwsbrief demo
  const newsletter = document.getElementById('newsletterForm');
  if (newsletter) {
    newsletter.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = newsletter.querySelector('button');
      const original = btn.textContent;
      btn.textContent = 'BEDANKT ✓';
      newsletter.querySelector('input').value = '';
      setTimeout(() => { btn.textContent = original; }, 3000);
    });
  }
})();

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

  // Contactformulier demo — vervangen door echte backend integratie later
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const success = document.getElementById('formSuccess');
      if (btn) btn.textContent = 'VERSTUURD ✓';
      if (success) success.classList.add('show');
      setTimeout(() => {
        form.reset();
        if (btn) btn.innerHTML = 'STUUR \'T MAAR <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
        if (success) success.classList.remove('show');
      }, 4500);
    });
  }

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

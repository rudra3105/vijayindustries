/* =========================================
   VIJAY INDUSTRIES  —  main.js
   ========================================= */

(function () {
  'use strict';

  /* ── Navbar shadow on scroll ── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('has-shadow', window.scrollY > 10);
    }, { passive: true });
  }

  /* ── Mobile burger ── */
  const burger = document.querySelector('.nav-burger');
  const drawer = document.querySelector('.mobile-drawer');
  if (burger && drawer) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      drawer.classList.toggle('open');
    });
  }

  /* ── Active nav link ── */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .sidebar-link, .mobile-drawer a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ── Animated counters ── */
  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const dur    = 1800;
    const start  = performance.now();
    const tick   = now => {
      const t = Math.min((now - start) / dur, 1);
      const v = target * (1 - Math.pow(1 - t, 3));
      el.textContent = (Number.isInteger(target) ? Math.round(v) : v.toFixed(1)) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ── Intersection Observer for reveals + counters ── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      if (el.classList.contains('reveal') ||
          el.classList.contains('reveal-l') ||
          el.classList.contains('reveal-r')) {
        el.classList.add('in');
      }
      if (el.dataset.count !== undefined) {
        animateCount(el);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal, .reveal-l, .reveal-r, [data-count]')
          .forEach(el => io.observe(el));

  /* ── Scroll-to-top ── */
  const backTop = document.querySelector('.back-top');
  if (backTop) {
    window.addEventListener('scroll', () => {
      backTop.classList.toggle('show', window.scrollY > 350);
    }, { passive: true });
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ── Form submit simulation ── */
  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('[type=submit]');
      const inputs = form.querySelectorAll('[required]');
      let ok = true;
      inputs.forEach(inp => {
        if (!inp.value.trim()) {
          inp.style.borderColor = '#e05252';
          ok = false;
          setTimeout(() => (inp.style.borderColor = ''), 2500);
        }
      });
      if (!ok) return;
      if (!btn) return;
      const orig = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = '✓ Message Sent';
        btn.style.background = '#27ae60';
        setTimeout(() => {
          btn.textContent = orig;
          btn.disabled = false;
          btn.style.background = '';
          form.reset();
        }, 3000);
      }, 1400);
    });
  });

  /* ── Stagger children of .stagger-parent ── */
  document.querySelectorAll('.stagger-parent').forEach(parent => {
    [...parent.children].forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.07}s`;
    });
  });

})();

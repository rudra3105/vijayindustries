/* =========================================
   VIJAY INDUSTRIES  —  main.js
   ========================================= */

(function () {
  'use strict';

  function init() {

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
  // Normalize current path to always end with a trailing slash (e.g. "/about-us/")
  let currentPath = location.pathname;
  if (!currentPath.endsWith('/')) currentPath += '/';
  document.querySelectorAll('.nav-link, .sidebar-link, .mobile-drawer a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href && href.startsWith('/') && href === currentPath) {
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

  /* ── Form submit — real submission via W3Forms ── */
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

      const formData = new FormData(form);

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          btn.textContent = '✓ Message Sent';
          btn.style.background = '#27ae60';
        } else {
          btn.textContent = '✗ Failed — Try Again';
          btn.style.background = '#e05252';
        }
        setTimeout(() => {
          btn.textContent = orig;
          btn.disabled = false;
          btn.style.background = '';
          form.reset();
          // Close modal if this form lives inside one
          const modal = form.closest('.modal-overlay');
          if (modal && data.success) modal.classList.remove('open');
        }, 2200);
      })
      .catch(() => {
        btn.textContent = '✗ Network Error';
        btn.style.background = '#e05252';
        setTimeout(() => {
          btn.textContent = orig;
          btn.disabled = false;
          btn.style.background = '';
        }, 2500);
      });
    });
  });

  /* ── Inquiry Popup Modal ── */
  const inquiryModal   = document.getElementById('inquiryModal');
  const inquiryForm    = document.getElementById('inquiryModalForm');
  const inquiryProduct = document.getElementById('inquiryModalProduct');
  const inquiryTitle   = document.getElementById('inquiryModalTitle');

  function openInquiryModal(productName) {
    if (!inquiryModal) return;
    if (inquiryProduct) inquiryProduct.value = productName || 'General Inquiry';
    if (inquiryTitle) inquiryTitle.textContent = productName ? `Inquire — ${productName}` : 'Send an Inquiry';
    inquiryModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    const firstInput = inquiryModal.querySelector('input[type=text]');
    if (firstInput) setTimeout(() => firstInput.focus(), 250);
  }

  function closeInquiryModal() {
    if (!inquiryModal) return;
    inquiryModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-inquiry-open]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openInquiryModal(btn.dataset.inquiryOpen);
    });
  });

  if (inquiryModal) {
    inquiryModal.querySelectorAll('[data-inquiry-close]').forEach(el => {
      el.addEventListener('click', closeInquiryModal);
    });
    inquiryModal.addEventListener('click', e => {
      if (e.target === inquiryModal) closeInquiryModal();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeInquiryModal();
    });
  }

  /* ── Stagger children of .stagger-parent ── */
  document.querySelectorAll('.stagger-parent').forEach(parent => {
    [...parent.children].forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.07}s`;
    });
  });

  } // end init()

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM already parsed (e.g. script executed after DOMContentLoaded already fired)
    init();
  }

})();

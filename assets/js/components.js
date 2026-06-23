/* =========================================
   VIJAY INDUSTRIES  —  components.js
   Injects shared topbar / navbar / footer
   ========================================= */

/* ── Topbar ── */
const TOPBAR = `
<div class="topbar">
  <div class="container">
    <div class="topbar-left">
      <div class="topbar-item">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <a href="tel:+919925618385">+91 99256 18385</a>
      </div>
      <div class="topbar-item">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        <a href="mailto:vijay_industries19@yahoo.in">vijay_industries19@yahoo.in</a>
      </div>
    </div>
    <div class="topbar-right">
      <div class="topbar-item">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Makarpura G.I.D.C., Vadodara – 390010
      </div>
    </div>
  </div>
</div>
`;

/* ── Navbar ── */
const NAVBAR = `
<nav class="navbar">
  <div class="container">
    <div class="nav-wrap">
      <a href="/" class="nav-logo">
        <img src="/assets/img/logo.jpg" alt="Vijay Industries" height="52">
      </a>

      <ul class="nav-links">
        <li class="nav-item"><a href="/" class="nav-link">Home</a></li>

        <li class="nav-item">
          <a href="/about-us/" class="nav-link">About Us <span class="caret">▾</span></a>
          <div class="nav-drop">
            <a href="/about-us/">Overview</a>
            <a href="/company-profile/">Company Profile</a>
            <a href="/product-profile/">Product Profile</a>
            <a href="/our-team/">Our Team</a>
          </div>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">Capabilities <span class="caret">▾</span></a>
          <div class="nav-drop">
            <a href="/infrastructure/">Infrastructure</a>
            <a href="/research-development/">Research &amp; Development</a>
            <a href="/quality-assurance/">Quality Assurance</a>
            <a href="/client-satisfaction/">Client Satisfaction</a>
            <a href="/why-us/">Why Us</a>
            <a href="/certificates/">Certificates</a>
          </div>
        </li>

        <li class="nav-item">
          <a href="/product-profile/" class="nav-link">Products <span class="caret">▾</span></a>
          <div class="nav-drop">
            <a href="/rotating-air-rings/">Rotating Air Rings</a>
            <a href="/plant-air-rings/">Plant Air Rings</a>
            <a href="/mono-multilayer-film-plant-air-rings/">Mono &amp; Multilayer Film Air Rings</a>
            <a href="/plastic-processing-plant-machinery/">Plastic Processing Machinery</a>
            <a href="/blown-film-plant-fabricator/">Blown Film Plant Fabricator</a>
            <a href="/machinery-spares-parts/">Machinery Spares &amp; Parts</a>
            <a href="/air-ring-parts/">Air Ring Parts</a>
            <a href="/liner-bags/">Liner Bags</a>
            <a href="/air-ring-ld-tarpaulin-plant/">Air Ring LD Tarpaulin Plant</a>
          </div>
        </li>

        <li class="nav-item"><a href="/inquiry/" class="nav-link">Inquiry</a></li>
        <li class="nav-item"><a href="/contact/" class="nav-link">Contact</a></li>
      </ul>

      <div class="nav-cta">
        <a href="/inquiry/" class="btn btn-primary" style="font-size:.78rem;padding:.6rem 1.35rem;">Get a Quote</a>
      </div>

      <button class="nav-burger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile drawer -->
    <div class="mobile-drawer">
      <a href="/">Home</a>
      <a href="/about-us/">About Us</a>
      <a href="/company-profile/" class="sub-link">Company Profile</a>
      <a href="/product-profile/" class="sub-link">Product Profile</a>
      <a href="/our-team/" class="sub-link">Our Team</a>
      <a href="/infrastructure/">Infrastructure</a>
      <a href="/quality-assurance/" class="sub-link">Quality Assurance</a>
      <a href="/why-us/" class="sub-link">Why Us</a>
      <a href="/product-profile/">Products</a>
      <a href="/rotating-air-rings/" class="sub-link">Rotating Air Rings</a>
      <a href="/plant-air-rings/" class="sub-link">Plant Air Rings</a>
      <a href="/blown-film-plant-fabricator/" class="sub-link">Blown Film Plant</a>
      <a href="/machinery-spares-parts/" class="sub-link">Machinery Spares</a>
      <a href="/liner-bags/" class="sub-link">Liner Bags</a>
      <a href="/inquiry/">Inquiry</a>
      <a href="/contact/">Contact</a>
    </div>
  </div>
</nav>
`;

/* ── Products Sidebar ── */
const SIDEBAR = `
<div class="sidebar-box">
  <div class="sidebar-head">Product Categories</div>
  <a href="/rotating-air-rings/" class="sidebar-link">Rotating Air Rings</a>
  <a href="/plant-air-rings/" class="sidebar-link">Plant Air Rings</a>
  <a href="/mono-multilayer-film-plant-air-rings/" class="sidebar-link">Mono &amp; Multilayer Film Air Rings</a>
  <a href="/plastic-processing-plant-machinery/" class="sidebar-link">Plastic Processing Machinery</a>
  <a href="/blown-film-plant-fabricator/" class="sidebar-link">Blown Film Plant Fabricator</a>
  <a href="/machinery-spares-parts/" class="sidebar-link">Machinery Spares &amp; Parts</a>
  <a href="/air-ring-parts/" class="sidebar-link">Air Ring Parts</a>
  <a href="/liner-bags/" class="sidebar-link">Liner Bags</a>
  <a href="/air-ring-ld-tarpaulin-plant/" class="sidebar-link">Air Ring LD Tarpaulin Plant</a>
</div>
`;

/* ── Footer ── */
const FOOTER = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">
          <img src="/assets/img/logo.jpg" alt="Vijay Industries">
        </div>
        <p>Distinguished manufacturer &amp; trader of Rotating Air Rings, Blown Film Plants, and Plastic Processing Machinery from Vadodara, Gujarat since 1991.</p>
        <div class="footer-badge">★ ISO 9001:2008 Certified</div>
      </div>

      <div class="footer-col">
        <h5>Company</h5>
        <ul class="footer-links">
          <li><a href="/about-us/">About Us</a></li>
          <li><a href="/company-profile/">Company Profile</a></li>
          <li><a href="/our-team/">Our Team</a></li>
          <li><a href="/infrastructure/">Infrastructure</a></li>
          <li><a href="/quality-assurance/">Quality Assurance</a></li>
          <li><a href="/why-us/">Why Choose Us</a></li>
          <li><a href="/certificates/">Certificates</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h5>Products</h5>
        <ul class="footer-links">
          <li><a href="/rotating-air-rings/">Rotating Air Rings</a></li>
          <li><a href="/plant-air-rings/">Plant Air Rings</a></li>
          <li><a href="/mono-multilayer-film-plant-air-rings/">Mono &amp; Multilayer Film</a></li>
          <li><a href="/blown-film-plant-fabricator/">Blown Film Plant</a></li>
          <li><a href="/plastic-processing-plant-machinery/">Plastic Processing</a></li>
          <li><a href="/machinery-spares-parts/">Machinery Spares</a></li>
          <li><a href="/liner-bags/">Liner Bags</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h5>Contact</h5>
        <ul class="footer-contact">
          <li>
            <span>📍</span>
            <span>Shed No. 119-A, G.I.D.C. Estate, Near Jayant Oil Mill, Makarpura, Vadodara – 390010, Gujarat</span>
          </li>
          <li>
            <span>📞</span>
            <span>
              <a href="tel:+919925618385">+91 99256 18385</a><br>
              <a href="tel:+919712906385">+91-97129 06385</a>
            </span>
          </li>
          <li>
            <span>✉</span>
            <a href="mailto:vijay_industries19@yahoo.in">vijay_industries19@yahoo.in</a>
          </li>
          <li>
            <span>👤</span>
            <span>Mr. Prakash G. Jadhav (Owner)</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container" style="display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;">
      <p>© 2026 Vijay Industries, Vadodara. All rights reserved. Developed by <a href="https://www.webriseglobal.com" target="_blank" rel="noopener noreferrer">Webrise Global</a></p>
      <p>ISO 9001:2008 Certified Manufacturer &amp; Trader</p>
    </div>
  </div>
</footer>
<button class="back-top" aria-label="Back to top">↑</button>
`;

/* ── Inquiry Popup Modal ── */
const INQUIRY_MODAL = `
<div class="modal-overlay" id="inquiryModal">
  <div class="modal-box">
    <div class="modal-head">
      <div>
        <h3 id="inquiryModalTitle">Send an Inquiry</h3>
        <p>We typically respond within 24 business hours.</p>
      </div>
      <button type="button" class="modal-close" data-inquiry-close aria-label="Close">✕</button>
    </div>
    <div class="modal-body">
      <form id="inquiryModalForm" data-form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="b61cd5a2-e28c-462b-979a-d1f3c9cb4cae">
        <input type="hidden" name="subject" value="New Product Inquiry – Vijay Industries">
        <input type="hidden" name="from_name" value="Vijay Industries Website">
        <input type="hidden" name="product" id="inquiryModalProduct" value="General Inquiry">

        <div class="form-group">
          <label class="form-label">Your Name *</label>
          <input type="text" name="name" class="form-control" placeholder="Full name" required>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Email Address *</label>
            <input type="email" name="email" class="form-control" placeholder="your@email.com" required>
          </div>
          <div class="form-group">
            <label class="form-label">Phone Number *</label>
            <input type="tel" name="phone" class="form-control" placeholder="+91 XXXXX XXXXX" required>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Company Name</label>
          <input type="text" name="company" class="form-control" placeholder="Company / Organisation">
        </div>

        <div class="form-group">
          <label class="form-label">Quantity Required</label>
          <input type="text" name="quantity" class="form-control" placeholder="e.g. 2 units, 100 kg">
        </div>

        <div class="form-group">
          <label class="form-label">Message / Specifications</label>
          <textarea name="message" class="form-control" rows="4" placeholder="Describe dimensions, material grade, delivery location, etc."></textarea>
        </div>

        <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;padding:.9rem;">
          Submit Inquiry →
        </button>
      </form>
    </div>
  </div>
</div>
`;

/* ── Inject on DOM ready ── */
document.addEventListener('DOMContentLoaded', () => {
  // Topbar
  const tbSlot = document.getElementById('topbar');
  if (tbSlot) tbSlot.outerHTML = TOPBAR;
  else document.body.insertAdjacentHTML('afterbegin', TOPBAR);

  // Navbar
  const nbSlot = document.getElementById('navbar');
  if (nbSlot) nbSlot.outerHTML = NAVBAR;

  // Sidebar
  document.querySelectorAll('#prod-sidebar').forEach(el => {
    el.innerHTML = SIDEBAR;
    // highlight active
    let currentPath = location.pathname;
    if (!currentPath.endsWith('/')) currentPath += '/';
    el.querySelectorAll('.sidebar-link').forEach(a => {
      if ((a.getAttribute('href') || '') === currentPath) a.classList.add('active');
    });
  });

  // Footer
  const ftSlot = document.getElementById('footer');
  if (ftSlot) ftSlot.outerHTML = FOOTER;

  // Inquiry Modal (inject once, at end of body)
  if (!document.getElementById('inquiryModal')) {
    document.body.insertAdjacentHTML('beforeend', INQUIRY_MODAL);
  }
});

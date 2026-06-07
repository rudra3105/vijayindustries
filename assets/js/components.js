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
        <a href="tel:+919825610385">+91-98256 10385</a>
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
      <a href="index.html" class="nav-logo">
        <img src="assets/img/logo.jpg" alt="Vijay Industries" height="52">
      </a>

      <ul class="nav-links">
        <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>

        <li class="nav-item">
          <a href="about.html" class="nav-link">About Us <span class="caret">▾</span></a>
          <div class="nav-drop">
            <a href="about.html">Overview</a>
            <a href="company-profile.html">Company Profile</a>
            <a href="product-profile.html">Product Profile</a>
            <a href="our-team.html">Our Team</a>
          </div>
        </li>

        <li class="nav-item">
          <a href="#" class="nav-link">Capabilities <span class="caret">▾</span></a>
          <div class="nav-drop">
            <a href="infrastructure.html">Infrastructure</a>
            <a href="research-development.html">Research &amp; Development</a>
            <a href="quality-assurance.html">Quality Assurance</a>
            <a href="client-satisfaction.html">Client Satisfaction</a>
            <a href="why-us.html">Why Us</a>
            <a href="certificates.html">Certificates</a>
          </div>
        </li>

        <li class="nav-item">
          <a href="product-profile.html" class="nav-link">Products <span class="caret">▾</span></a>
          <div class="nav-drop">
            <a href="rotating-air-rings.html">Rotating Air Rings</a>
            <a href="plant-air-rings.html">Plant Air Rings</a>
            <a href="mono-multilayer-film-plant-air-rings.html">Mono &amp; Multilayer Film Air Rings</a>
            <a href="plastic-processing-plant-machinery.html">Plastic Processing Machinery</a>
            <a href="blown-film-plant-fabricator.html">Blown Film Plant Fabricator</a>
            <a href="machinery-spares-parts.html">Machinery Spares &amp; Parts</a>
            <a href="air-ring-parts.html">Air Ring Parts</a>
            <a href="liner-bags.html">Liner Bags</a>
            <a href="air-ring-ll-tarpaulin-plant.html">Air Ring LD Tarpaulin Plant</a>
          </div>
        </li>

        <li class="nav-item"><a href="inquiry.html" class="nav-link">Inquiry</a></li>
        <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
      </ul>

      <div class="nav-cta">
        <a href="inquiry.html" class="btn btn-primary" style="font-size:.78rem;padding:.6rem 1.35rem;">Get a Quote</a>
      </div>

      <button class="nav-burger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile drawer -->
    <div class="mobile-drawer">
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="company-profile.html" class="sub-link">Company Profile</a>
      <a href="product-profile.html" class="sub-link">Product Profile</a>
      <a href="our-team.html" class="sub-link">Our Team</a>
      <a href="infrastructure.html">Infrastructure</a>
      <a href="quality-assurance.html" class="sub-link">Quality Assurance</a>
      <a href="why-us.html" class="sub-link">Why Us</a>
      <a href="product-profile.html">Products</a>
      <a href="rotating-air-rings.html" class="sub-link">Rotating Air Rings</a>
      <a href="plant-air-rings.html" class="sub-link">Plant Air Rings</a>
      <a href="blown-film-plant-fabricator.html" class="sub-link">Blown Film Plant</a>
      <a href="machinery-spares-parts.html" class="sub-link">Machinery Spares</a>
      <a href="liner-bags.html" class="sub-link">Liner Bags</a>
      <a href="inquiry.html">Inquiry</a>
      <a href="contact.html">Contact</a>
    </div>
  </div>
</nav>
`;

/* ── Products Sidebar ── */
const SIDEBAR = `
<div class="sidebar-box">
  <div class="sidebar-head">Product Categories</div>
  <a href="rotating-air-rings.html" class="sidebar-link">Rotating Air Rings</a>
  <a href="plant-air-rings.html" class="sidebar-link">Plant Air Rings</a>
  <a href="mono-multilayer-film-plant-air-rings.html" class="sidebar-link">Mono &amp; Multilayer Film Air Rings</a>
  <a href="plastic-processing-plant-machinery.html" class="sidebar-link">Plastic Processing Machinery</a>
  <a href="blown-film-plant-fabricator.html" class="sidebar-link">Blown Film Plant Fabricator</a>
  <a href="machinery-spares-parts.html" class="sidebar-link">Machinery Spares &amp; Parts</a>
  <a href="air-ring-parts.html" class="sidebar-link">Air Ring Parts</a>
  <a href="liner-bags.html" class="sidebar-link">Liner Bags</a>
  <a href="air-ring-ll-tarpaulin-plant.html" class="sidebar-link">Air Ring LD Tarpaulin Plant</a>
</div>
`;

/* ── Footer ── */
const FOOTER = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">
          <img src="assets/img/logo.jpg" alt="Vijay Industries">
        </div>
        <p>Distinguished manufacturer &amp; trader of Rotating Air Rings, Blown Film Plants, and Plastic Processing Machinery from Vadodara, Gujarat since 1991.</p>
        <div class="footer-badge">★ ISO 9001:2008 Certified</div>
      </div>

      <div class="footer-col">
        <h5>Company</h5>
        <ul class="footer-links">
          <li><a href="about.html">About Us</a></li>
          <li><a href="company-profile.html">Company Profile</a></li>
          <li><a href="our-team.html">Our Team</a></li>
          <li><a href="infrastructure.html">Infrastructure</a></li>
          <li><a href="quality-assurance.html">Quality Assurance</a></li>
          <li><a href="why-us.html">Why Choose Us</a></li>
          <li><a href="certificates.html">Certificates</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h5>Products</h5>
        <ul class="footer-links">
          <li><a href="rotating-air-rings.html">Rotating Air Rings</a></li>
          <li><a href="plant-air-rings.html">Plant Air Rings</a></li>
          <li><a href="mono-multilayer-film-plant-air-rings.html">Mono &amp; Multilayer Film</a></li>
          <li><a href="blown-film-plant-fabricator.html">Blown Film Plant</a></li>
          <li><a href="plastic-processing-plant-machinery.html">Plastic Processing</a></li>
          <li><a href="machinery-spares-parts.html">Machinery Spares</a></li>
          <li><a href="liner-bags.html">Liner Bags</a></li>
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
              <a href="tel:+919825610385">+91-98256 10385</a><br>
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
    const page = location.pathname.split('/').pop();
    el.querySelectorAll('.sidebar-link').forEach(a => {
      if ((a.getAttribute('href') || '') === page) a.classList.add('active');
    });
  });

  // Footer
  const ftSlot = document.getElementById('footer');
  if (ftSlot) ftSlot.outerHTML = FOOTER;
});

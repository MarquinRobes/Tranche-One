
let packages = {};
let packageList = [];
let faqData = [];
let siteSettings = {};

const peso = new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", maximumFractionDigits: 0 });

const icons = {
  compass: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z"/></svg>',
  logo: '<img src="../static/images/CPlogom.png" alt="Celestia Passage Logo" class="brand-icon" />',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.2A8.5 8.5 0 1 1 8.8 4 7 7 0 0 0 20 15.2Z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>',
  users: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>'
};

function header() {
  return `<header class="site-header">
    <a class="brand" href="index.html" aria-label="Celestia Passage home">${icons.logo}<span>Celestia <i>Passage</i></span></a>
    <nav class="desktop-nav" aria-label="Primary">
      <a href="index.html#journeys">Journeys</a>
      <a href="index.html#why-us">About Us</a>
      <a href="index.html#faq">FAQs</a>
      <a href="#contact">Contact Us</a>
    </nav>
    <div class="header-actions">
      <button class="icon-btn theme-toggle" aria-label="Switch color theme">${icons.moon}</button>
      <button class="button button-small open-booking">Plan my journey</button>
      <button class="icon-btn menu-toggle" aria-label="Open menu" aria-expanded="false">${icons.menu}</button>
    </div>
    <div class="mobile-menu">
      <a href="index.html#journeys">Journeys</a>
      <a href="index.html#why-us">About Us</a>
      <a href="index.html#faq">FAQs</a>
      <a href="#contact">Contact Us</a>
      <button class="button open-booking">Plan my journey</button>
    </div>
  </header>`;
}

function footer() {
  return `<footer id="contact">
    <div class="footer-inner">
      <div>
        <a class="brand footer-brand" href="index.html">
          ${icons.logo}
          <span>Celestia <i>Passage</i></span>
        </a>
        <p>Thoughtful journeys across Teyvat, planned with care from first question to final farewell.</p>
      </div>
      <div>
        <strong>Explore</strong>
        <a href="index.html#journeys">All journeys</a>
        <a href="index.html#faq">Travel FAQs</a>
        <a href="mailto:celestiapassage@gmail.com">Contact Us</a>
      </div>
      <div>
        <strong>Direct line</strong>
        <a href="tel:${(siteSettings.contact_phone || "").replace(/\s/g, "")}">${siteSettings.contact_phone || ""}</a>
        <a href="mailto:${siteSettings.contact_email || ""}">${siteSettings.contact_email || ""}</a>
        <span>${siteSettings.office_hours || ""}</span>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Celestia Passage (All rights reserved-School project purpose only)</span>
      <span>Made for travelers, by a traveler.</span>
    </div>
  </footer>`;
}

function bookingModal(selected = "mondstadt") {
  return `<dialog class="booking-dialog">
    <button class="dialog-close" aria-label="Close booking form">${icons.close}</button>
    <div class="dialog-heading">
      <span class="section-kicker">Start your passage</span>
      <h2>Request a reservation</h2>
      <p>We’ll confirm availability within one business day.</p>
    </div>
    <form id="booking-form">
      <label>Destination
        <select id="booking-package" name="package">
          ${packageList.map(([key, p]) => `<option value="${key}" ${key === selected ? "selected" : ""}>${p.nation} — ${p.title}</option>`).join("")}
        </select>
      </label>
      <div class="form-row">
        <label>Travel date<input type="date" name="date" required></label>
        <label>Travelers<input id="traveler-count" type="number" name="travelers" min="1" max="10" value="2" required></label>
      </div>
      <div class="form-row">
        <label>Full name<input type="text" name="name" autocomplete="name" placeholder="Your name" required></label>
        <label>Email address<input type="email" name="email" autocomplete="email" placeholder="you@example.com" required></label>
      </div>
      <div class="estimate">
        <span>Estimated package total</span>
        <strong id="booking-total"></strong>
        <small>Final quote may vary with optional upgrades.</small>
      </div>
      <button class="button button-full" type="submit">Check availability ${icons.arrow}</button>
    </form>
    <div class="success-state" hidden>
      <span class="success-mark">${icons.shield}</span>
      <h2>Request received</h2>
      <p>Thank you. For choosing Celestia Passage, be assured that your journey is in capable hands.</p>
      <button class="button dialog-done">Done</button>
    </div>
  </dialog>`;
}

function faqSection() {
  const faqs = faqData.map(f => [f.question, f.answer]);

  return `<section class="faq section" id="faq">
    <div class="section-intro">
      <span class="section-kicker">Good to know</span>
      <h2>Questions before you wander?</h2>
      <p>Clear answers for a smooth passage from inquiry to departure.</p>
    </div>
    <div class="faq-list">
      ${faqs.map((f, i) => `
        <details ${i === 0 ? "open" : ""}>
          <summary>${f[0]}<span>+</span></summary>
          <p>${f[1]}</p>
        </details>
      `).join("")}
    </div>
  </section>`;
}

function heroSection() {
  return `<section class="hero">
    <video autoplay muted loop playsinline class="hero-video">
      <source src="../static/images/live-hero.mp4" type="video/mp4">
    </video>
    <div class="hero-shade"></div>
    <div class="hero-content">
      <span class="hero-kicker">Bespoke journeys across Teyvat</span>
      <h1>Go where wonder<br><em>leads you.</em></h1>
      <p>Seven nations. Countless stories. One thoughtfully planned passage from the familiar into the extraordinary.</p>
      <div class="hero-actions">
        <a class="button button-light" href="#journeys">Explore journeys ${icons.arrow}</a>
        <button class="text-button open-booking">Plan something personal</button>
      </div>
    </div>
  </section>`;
}

function journeysSection() {
  const cards = packageList.map(([key, p], i) => `
    <a class="journey-card card-${i + 1}" href="${key}.html" style="--accent:${p.color}">
      <img src="${p.image}" alt="${p.nation} landscape" loading="lazy">
      <div class="card-overlay"></div>
      <div class="card-copy">
        <small>· ${p.nation}</small>
        <h3>${p.title}</h3>
        <div>
          <span>From ${peso.format(p.price)}</span>
          <span class="round-arrow">${icons.arrow}</span>
        </div>
      </div>
    </a>
  `).join("");

  return `<section class="journeys section" id="journeys">
    <div class="section-heading">
      <div>
        <span class="section-kicker">The seven nations</span>
        <h2>Choose your horizon.</h2>
      </div>
      <p>From windswept valleys to lantern-lit harbors, each passage pairs iconic sights with space to truly experience them.</p>
    </div>
    <div class="bento-grid">${cards}</div>
  </section>`;
}

function promiseSection() {
  return `<section class="promise section" id="why-us">
    <div class="promise-image">
      <img src="${siteSettings.director_image || ""}" alt="Mountains and river in Liyue" loading="lazy">
      <span>Journeys paced<br>for memory.</span>
    </div>
    <div class="promise-copy">
      <span class="section-kicker">The Celestia standard</span>
      <h2>Travel director.<br>Every detail considered.</h2>
      <p>"Celestia Passage founded by a former traveler after traversing every corner of Teyvat's seven nations. 
        Wanting to share the experiences, he created an agency rooted in his own real adventures. 
        The Director personally crafts every journey, sharing the exact secret vistas 
        and quiet moments that defined his own path."</p>
      <div class="benefits">
        <div>
          ${icons.compass}
          <span><strong>Locally considered</strong><small>Routes balanced around culture, nature, and breathing room.</small></span>
        </div>
        <div>
          ${icons.shield}
          <span><strong>Clear from day one</strong><small>Transparent estimates and one place for every trip detail.</small></span>
        </div>
        <div>
          ${icons.users}
          <span><strong>Human support</strong><small>A dedicated point of contact before and during your journey.</small></span>
        </div>
      </div>
    </div>
  </section>`;
}

function quoteBandSection() {
  return `<section class="quote-band">
    <blockquote>“The world opens itself to those who choose to wander with intention.”</blockquote>
    <span>— The Celestia Passage philosophy</span>
  </section>`;
}

function ctaSection() {
  return `<section class="cta">
    <div>
      <span class="section-kicker">Your passage awaits</span>
      <h2>Let’s turn a distant place<br>into your next story.</h2>
      <button class="button button-light open-booking">Begin planning ${icons.arrow}</button>
    </div>
  </section>`;
}

function homePage() {
  return `${header()}
  <main>
    ${heroSection()}
    ${journeysSection()}
    ${promiseSection()}
    ${quoteBandSection()}
    ${faqSection()}
    ${ctaSection()}
  </main>
  ${footer()}
  ${bookingModal()}`;
}

function nationPage(key) {
  const p = packages[key] || packageList[0][1];
  const others = packageList.filter(([k]) => k !== key).slice(0, 3);
  
  return `${header()}
  <main class="nation-page" style="--nation-color:${p.color}">
    <section class="nation-hero">
      <img src="${p.image}" alt="${p.nation} destination landscape">
      <div class="hero-shade"></div>
      <div class="nation-hero-content">
        <a href="index.html#journeys" class="back-link">← All journeys</a>
        <span>${p.eyebrow}</span>
        <h1>${p.nation}</h1>
        <p>${p.title}</p>
      </div>
    </section>
    
    <section class="package-overview section">
      <div class="overview-main">
        <span class="section-kicker">The passage</span>
        <h2>${p.title}</h2>
        <p class="lead">${p.description}</p>
        <div class="quick-facts">
          <div>
            ${icons.calendar}
            <span><small>Duration</small><strong>${p.duration}</strong></span>
          </div>
          <div>
            ${icons.pin}
            <span><small>Featured stops</small><strong>${p.stops.length} curated places</strong></span>
          </div>
          <div>
            ${icons.users}
            <span><small>Best for</small><strong>Couples & small groups</strong></span>
          </div>
        </div>
      </div>
      <aside class="price-card">
        <span>Package rate</span>
        <strong>${peso.format(p.price)}</strong>
        <small>per traveler</small>
        <hr>
        <p>Accommodation, guided experiences, and destination transfers included.</p>
        <button class="button button-full open-booking" data-package="${key}">Check availability ${icons.arrow}</button>
        <small>No payment required to inquire</small>
      </aside>
    </section>
    
    <section class="itinerary section">
      <div class="section-intro">
        <span class="section-kicker">Day by day</span>
        <h2>A considered itinerary.</h2>
        <p>Planned enough to feel effortless, spacious enough to make it your own.</p>
      </div>
      <div class="timeline">
        ${p.itinerary.map((day, i) => `
          <details class="itinerary-details" ${i === 0 ? "open" : ""}>
            <summary>
              <span class="day-num">${String(i + 1).padStart(2, "0")}</span>
              <div>
                <small>Day ${i + 1}</small>
                <h3>${day[0]}<span>+</span></h3>
              </div>
            </summary>
            <div class="itinerary-animation-wrapper">
              <div class="itinerary-content">
                <p>${day[1]}</p>
                <img src="${day[2]}" alt="${day[0]} view" loading="lazy">
              </div>
            </div>
          </details>
        `).join("")}
      </div>
    </section>
    
    <section class="stops section">
      <div class="section-heading">
        <div>
          <span class="section-kicker">Along the way</span>
          <h2>Every place holds a piece of the story.</h2>
        </div>
      </div>
      <div class="stop-grid">
        ${p.stops.map((stop, i) => `
          <div>
            <span>0${i + 1}</span>
            <h3>${stop}</h3>
            <p>${["A signature landmark with time to look beyond the usual viewpoint.", "A guided visit enriched by local context and unhurried discovery.", "A memorable final stop chosen for atmosphere, beauty, and a sense of place."][i]}</p>
          </div>
        `).join("")}
      </div>
    </section>
    
    ${faqSection()}
    
    <section class="more-journeys section">
      <div class="section-heading">
        <div>
          <span class="section-kicker">Keep wandering</span>
          <h2>Other passages to consider.</h2>
        </div>
        <a href="index.html#journeys">View all journeys ${icons.arrow}</a>
      </div>
      <div class="more-grid">
        ${others.map(([k, o]) => `
          <a href="${k}.html">
            <img src="${o.image}" alt="${o.nation}" loading="lazy">
            <span>${o.nation}</span>
            <h3>${o.title}</h3>
            <small>From ${peso.format(o.price)}</small>
          </a>
        `).join("")}
      </div>
    </section>
  </main>
  ${footer()}
  ${bookingModal(key)}`;
}

function initializeInteractions() {
  const root = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");
  const savedTheme = localStorage.getItem("celestia-theme");
  const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (savedTheme === "dark" || (!savedTheme && preferredDark)) root.dataset.theme = "dark";
  const updateThemeIcon = () => { if (themeToggle) themeToggle.innerHTML = root.dataset.theme === "dark" ? icons.sun : icons.moon; };
  updateThemeIcon();
  themeToggle?.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("celestia-theme", root.dataset.theme);
    updateThemeIcon();
  });

  const menuButton = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  menuButton?.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.innerHTML = open ? icons.close : icons.menu;
  });
  mobileMenu?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileMenu.classList.remove("open")));

  const dialog = document.querySelector(".booking-dialog");
  const select = document.querySelector("#booking-package");
  const travelers = document.querySelector("#traveler-count");
  const total = document.querySelector("#booking-total");
  const updateTotal = () => {
    const selected = packages[select?.value] || packageList[0][1];
    const count = Math.max(1, Number(travelers?.value) || 1);
    if (total) total.textContent = peso.format(selected.price * count);
  };
  document.querySelectorAll(".open-booking").forEach(button => button.addEventListener("click", () => {
    const key = button.dataset.package;
    if (key && select) select.value = key;
    document.querySelector("#booking-form").hidden = false;
    document.querySelector(".dialog-heading").hidden = false;
    document.querySelector(".success-state").hidden = true;
    updateTotal();
    dialog?.showModal();
    document.body.classList.add("modal-open");
  }));
  document.querySelector(".dialog-close")?.addEventListener("click", () => dialog?.close());
  document.querySelector(".dialog-done")?.addEventListener("click", () => dialog?.close());
  dialog?.addEventListener("close", () => document.body.classList.remove("modal-open"));
  dialog?.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });
  select?.addEventListener("change", updateTotal);
  travelers?.addEventListener("input", updateTotal);
  updateTotal();

  const dateInput = document.querySelector('input[type="date"]');
  if (dateInput) dateInput.min = new Date(Date.now() + 86400000).toISOString().split("T")[0];
  document.querySelector("#booking-form")?.addEventListener("submit", async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const button = form.querySelector('button[type="submit"]');
    const data = Object.fromEntries(new FormData(form));
    let box = form.querySelector(".form-error");
    if (!box) { box = document.createElement("p"); box.className = "form-error"; box.setAttribute("role", "alert"); form.insertBefore(box, button); }
    box.textContent = "";
    button.disabled = true;
    try {
      const res = await fetch("../api/book.php", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const out = await res.json();
      if (!res.ok) { box.textContent = (out.errors || ["Could not send your request."]).join(" "); return; }
      document.querySelector(".success-state p").textContent = `Thank you. Your reference is ${out.reference}. For choosing Celestia Passage, be assured that your journey is in capable hands.`;
      form.hidden = true;
      document.querySelector(".dialog-heading").hidden = true;
      document.querySelector(".success-state").hidden = false;
    } catch (err) {
      box.textContent = "Could not reach the server. Please try again.";
    } finally {
      button.disabled = false;
    }
  });

  const itineraryItems = document.querySelectorAll(".itinerary-details");
  itineraryItems.forEach(item => {
    const summary = item.querySelector("summary");
    const wrapper = item.querySelector(".itinerary-animation-wrapper");

    summary.addEventListener("click", e => {
      e.preventDefault(); // Prevent instant native snap

      if (item.open) {
        // Smoothly close the currently open item
        const closeAnim = wrapper.animate(
          [
            { height: `${wrapper.offsetHeight}px`, opacity: 1 },
            { height: "0px", opacity: 0 }
          ],
          { duration: 350, easing: "cubic-bezier(0.4, 0, 0.2, 1)" }
        );
        closeAnim.onfinish = () => {
          item.open = false;
        };
      } else {
        // First, smoothly close any other open item
        itineraryItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.open) {
            const otherWrapper = otherItem.querySelector(".itinerary-animation-wrapper");
            const closeOther = otherWrapper.animate(
              [
                { height: `${otherWrapper.offsetHeight}px`, opacity: 1 },
                { height: "0px", opacity: 0 }
              ],
              { duration: 350, easing: "cubic-bezier(0.4, 0, 0.2, 1)" }
            );
            closeOther.onfinish = () => {
              otherItem.open = false;
            };
          }
        });

        // Open the clicked item and smoothly expand its height & fade in
        item.open = true;
        const targetHeight = wrapper.scrollHeight;
        wrapper.animate(
          [
            { height: "0px", opacity: 0 },
            { height: `${targetHeight}px`, opacity: 1 }
          ],
          { duration: 400, easing: "cubic-bezier(0.4, 0, 0.2, 1)" }
        );
      }
    });
  });

  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("revealed"); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll(".journey-card, .section-intro, .section-heading, .timeline article, .stop-grid > div, .more-grid > a").forEach(el => { el.classList.add("reveal"); observer.observe(el); });
}

async function start() {
  const app = document.querySelector("#app");
  try {
    const res = await fetch("../api/data.php");
    if (!res.ok) throw new Error("bad response");
    const data = await res.json();
    packages = data.packages;
    packageList = Object.entries(packages);
    faqData = data.faqs;
    siteSettings = data.settings;
  } catch (err) {
    app.innerHTML = '<p style="padding:4rem 1rem;text-align:center">We could not load our journeys right now. Please try again shortly.</p>';
    return;
  }
  const page = document.body.dataset.page;
  const nation = document.body.dataset.nation;
  app.innerHTML = page === "nation" ? nationPage(nation) : homePage();
  initializeInteractions();
}
start();

// SEVEN NATIONS PAGES & TRAVEL PACKAGES
const packages = {
  mondstadt: {
    nation: "Mondstadt",
    eyebrow: "The Nation of Freedom",
    title: "The City of Freedom Expedition",
    description: "Experience the romantic charm of windmills, rolling green hills, and historic stone architecture. Perfect for travelers looking for a relaxing nature getaway.",
    stops: ["Cider Lake", "Windrise", "Grand Cathedral of Mondstadt"],
    price: 12500,
    duration: "3 Days / 2 Nights",
    image: "../static/images/mondstadt.webp",
    homeHeroImage: "../static/images/homebg.png",
    color: "#287d73",
    //itinerary format
    itinerary: [
      ["Arrival in the City of Freedom", "Private transfer, old-city orientation walk, Cathedral visit, and welcome dinner.", "../static/images/cath.webp"],
      ["Windrise", "A guided countryside escape, lakeside picnic, and golden-hour windmill views.", "../static/images/wind.png"],
      ["Leisurely farewell", "Local market morning and a relaxed departure transfer.", "../static/images/depart1.webp"]
    ]
  },
  liyue: {
    nation: "Liyue", 
    eyebrow: "The Nation of Contracts", 
    title: "The Harbor of Stone and Commerce",
    description: "A bustling port city tour blending breathtaking mountain ranges, ancient folklore, and world-class culinary adventures.",
    stops: ["Liyue Harbor", "Mt. Aocang", "Wangshu Inn"], 
    price: 15000, duration: "4 Days / 3 Nights", 
    image: "../static/images/liyue.jpg", color: "#a4681d",
    directorImage: "../static/images/director.png",
    itinerary: [
      ["Harbor lights", "Arrival, waterfront promenade, and chef-led tasting dinner.", "../static/images/harbor.webp"], 
      ["Above the clouds", "Full-day Mt. Aocang scenic excursion with a private guide.", "../static/images/mt.webp"], 
      ["Ancient roads", "Folklore trail and sunset at Wangshu Inn.", "../static/images/wangshu.webp"], 
      ["Market morning", "Souvenir stop and assisted departure.", "../static/images/depart2.webp"]]
  },
  inazuma: {
    nation: "Inazuma", 
    eyebrow: "The Nation of Eternity", 
    title: "The Realm of Eternal Thunder",
    description: "Discover a culturally rich archipelago featuring striking purple foliage, traditional shrines, and serene coastal views.",
    stops: ["Narukami Island Grand Shrine", "Ritou Trading Port", "Tenshukaku"], 
    price: 18000, duration: "4 Days / 3 Nights", 
    image: "../static/images/inazuma.webp", color: "#7954a7",
    itinerary: [
      ["Across the narrows", "Arrival at Ritou and a lantern-lit welcome meal.", "../static/images/ritou.webp"], 
      ["Sacred Narukami", "Shrine trail, garden tea, and coastal viewpoints.", "../static/images/narukami.png"], 
      ["Seat of eternity", "Tenshukaku heritage tour and artisan workshop.", "../static/images/tenshukaku.webp"], 
      ["Island farewell", "A relaxed breakfast and port transfer.", "../static/images/depart3.webp"]]
  },
  sumeru: {
    nation: "Sumeru", 
    eyebrow: "The Nation of Wisdom", 
    title: "The City of Wisdom & Rainforest Retreat",
    description: "A dual-environment journey taking you from the majestic halls of learning to the dense, mystical canopies of the rainforest.",
    stops: ["Sumeru City Academy", "Gandharva Ville", "Caravan Ribat"], 
    price: 14000, duration: "3 Days / 3 Nights", 
    image: "../static/images/sumeru.webp", color: "#397a4c",
    itinerary: [
      ["City of scholars", "Academy district walk, bazaar lunch, and cultural briefing.", "../static/images/academy.webp"], 
      ["Under the canopy", "Guided rainforest trek and evening in Gandharva Ville.", "../static/images/gandharva.png"], 
      ["Desert threshold", "Caravan Ribat excursion and stargazing supper.", "../static/images/caravan.png"]]
  },
  fontaine: {
    nation: "Fontaine", 
    eyebrow: "The Nation of Justice", 
    title: "The Capital of Justice, Steam, and Aquanics",
    description: "Step into a picturesque hub of art, fashion, and advanced clockwork engineering surrounded by pristine waters.",
    stops: ["Court of Fontaine", "Opera Epiclese", "Lucine Fountain"], 
    price: 20000, duration: "5 Days / 4 Nights", 
    image: "../static/images/fontaine.webp", color: "#3975a9",
    itinerary: [
      ["A grand entrance", "Aquabus arrival and boulevard orientation.", "../static/images/aquabus.webp"], 
      ["Court & couture", "Architecture walk and fashion atelier visit.", "../static/images/court.jpg"], 
      ["A day at the opera", "Opera Epiclese tour and evening performance.", "../static/images/opera.png"], 
      ["Waters of Fontaine", "Lucine Fountain, and tasting menu.", "../static/images/waters.jpg"], 
      ["Final promenade", "Leisure time and private departure.", "../static/images/depart5.jpg"]]
  },
  natlan: {
    nation: "Natlan", 
    eyebrow: "The Nation of War", 
    title: "The Land of Ash, Hot Springs, and Valor",
    description: "An energetic adventure featuring dramatic volcanic landscapes, therapeutic thermal springs, and vibrant tribal festivals.",
    stops: ["Tepecac Stadium", "Children of the Echoes Canyon", "People of the Springs basin"], 
    price: 16500, 
    duration: "4 Days / 3 Nights", 
    image: "../static/images/natlan.png", color: "#b84c31",
    itinerary: [
      ["Welcome to Natlan", "Arrival celebration and regional feast.", "../static/images/welcome.webp"], 
      ["Echoes of the canyon", "Guided canyon route and craft village visit.", "../static/images/canyon.webp"], 
      ["Fire & water", "Volcanic overlook, hot springs, and festival evening.", "../static/images/spring.jpg"], 
      ["Champion's farewell", "Tepecac Stadium tour and departure.", "../static/images/stadium.webp"]]
  },
  snezhnaya: {
    nation: "Snezhnaya", 
    eyebrow: "The Nation of Love", 
    title: "The Eternal White Tundra",
    description: "A majestic winter expedition exploring frosted architectural marvels, grand palaces, and cozy alpine chalets under the aurora.",
    stops: ["Zapolyarny Palace outskirts", "Frost-bound Valleys", "Glacial Outposts"], 
    price: 22000, 
    duration: "5 Days / 4 Nights", 
    image: "../static/images/snezhnaya.webp", color: "#568295",
    itinerary: [
      ["Into the north", "Heated transfer, equipment fitting, and fireside dinner.", "../static/images/arrival.webp"], 
      ["Palace horizons", "Architecture route around the Zapolyarny outskirts.", "../static/images/palace.avif"], 
      ["Frost-bound valleys", "Guided snow trek and alpine chalet lunch.", "../static/images/valley.webp"], 
      ["Under the aurora", "Glacial outpost excursion and northern-lights watch.", "../static/images/aurora.webp"], 
      ["Warm farewell", "Slow breakfast and assisted departure.", "../static/images/farewell.jpg"]]
  }
};

// Convert packages object into [key, packageData] pairs for easy mapping
const packageList = Object.entries(packages);

// Philippine Peso currency formatter (e.g., ₱12,500)
const peso = new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", maximumFractionDigits: 0 });

// 2. REUSABLE SVG ICONS & BRAND MARK
const icons = {
  chevronUp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m18 15-6-6-6 6"/></svg>',
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

// Shared layout templates

// Renders the fixed top navigation bar and mobile humburger menu
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

// Renders the website footer and the backtotop button to all pages
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
        <a href="tel:+639691234567">+63 969 123 4567</a>
        <a href="mailto:celestiapassage@gmail.com">celestiapassage@gmail.com</a>
        <span>Mon–Sat, 8:00 AM–6:00 PM</span>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Celestia Passage (All rights reserved-School project purpose only)</span>
      <span>Made for travelers, by a traveler.</span>
    </div>
    <button class="back-to-top" aria-label="Back to top" title="Back to top">
      ${icons.chevronUp}
    </button>
  </footer>`;
}

// Renders the multi-step modal (Choose inquiry purpose, tour package reservation with price estimator, General inquiry, travel services)
function bookingModal(selected = "mondstadt") {
  return `<dialog class="booking-dialog">
    <button class="dialog-close" aria-label="Close modal">${icons.close}</button>

    <div id="step-choose" class="modal-step">
      <div class="dialog-heading">
        <span class="section-kicker">Start your passage</span>
        <h2>How may we assist you?</h2>
        <p>Select an option below to get started.</p>
      </div>
      <div class="intent-options" role="radiogroup" aria-label="Inquiry type">
        <label class="intent-card">
          <input type="radio" name="intent" value="package">
          <div>
            <strong>Destinations &amp; Tour Packages</strong>
            <small>Reserve a curated journey across the seven nations with an instant rate estimate.</small>
          </div>
        </label>
        <label class="intent-card">
          <input type="radio" name="intent" value="inquiry">
          <div>
            <strong>General Inquiries</strong>
            <small>Ask about custom itineraries, group arrangements, or travel advice.</small>
          </div>
        </label>
        <label class="intent-card">
          <input type="radio" name="intent" value="services">
          <div>
            <strong>Other Travel Services</strong>
            <small>Passport assistance, travel documents, or bespoke lodging upgrades.</small>
          </div>
        </label>
      </div>
      <button id="intent-next-btn" class="button button-full" type="button" hidden>Next ${icons.arrow}</button>
    </div>

    <div id="step-package" class="modal-step" hidden>
      <button type="button" class="step-back">← Back to options</button>
      <div class="dialog-heading">
        <span class="section-kicker">Curated journeys</span>
        <h2>Request a reservation</h2>
        <p>We’ll confirm availability within one business day.</p>
      </div>
      <form id="booking-form" class="modal-form" data-type="Tour Package">
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
    </div>

    <div id="step-inquiry" class="modal-step" hidden>
      <button type="button" class="step-back">← Back to options</button>
      <div class="dialog-heading">
        <span class="section-kicker">Ask our directors</span>
        <h2>General inquiry</h2>
        <p>Send us your questions and we’ll respond within one business day.</p>
      </div>
      <form id="inquiry-form" class="modal-form" data-type="General Inquiry">
        <label>Full name<input type="text" name="name" autocomplete="name" placeholder="Your name" required></label>
        <div class="form-row">
          <label>Phone number<input type="tel" name="phone" autocomplete="tel" placeholder="+63 9XX XXX XXXX" required></label>
          <label>Email address<input type="email" name="email" autocomplete="email" placeholder="you@example.com" required></label>
        </div>
        <label>Your questions
          <textarea name="questions" rows="4" placeholder="Tell us about your plans, group size, or any questions you have..." required></textarea>
        </label>
        <button class="button button-full" type="submit">Send inquiry ${icons.arrow}</button>
      </form>
    </div>

    <div id="step-services" class="modal-step" hidden>
      <button type="button" class="step-back">← Back to options</button>
      <div class="dialog-heading">
        <span class="section-kicker">Concierge support</span>
        <h2>Other travel services</h2>
        <p>Select the assistance you need and we’ll guide you through the requirements.</p>
      </div>
      <form id="services-form" class="modal-form" data-type="Travel Service">
        <label>Service needed
          <select id="service-category" name="service" required>
            <option value="passport">Passport Assistance</option>
            <option value="documents">Travel Documents &amp; Permits</option>
            <option value="lodging">Bespoke Villa &amp; Lodging Upgrades</option>
          </select>
        </label>
        <label id="service-sub-wrapper">
          <span id="service-sub-label">Passport application type</span>
          <select id="service-sub-select" name="serviceDetail" required></select>
        </label>
        <div class="form-row">
          <label>Full name<input type="text" name="name" autocomplete="name" placeholder="Your name" required></label>
          <label>Phone number<input type="tel" name="phone" autocomplete="tel" placeholder="+63 9XX XXX XXXX" required></label>
        </div>
        <label>Email address<input type="email" name="email" autocomplete="email" placeholder="you@example.com" required></label>
        <label>Additional details <span style="font-weight:400; color:var(--muted);">(Optional)</span>
          <textarea name="notes" rows="3" placeholder="Preferred dates, destination nation, or specific document requirements..."></textarea>
        </label>
        <button class="button button-full" type="submit">Request assistance ${icons.arrow}</button>
      </form>
    </div>

    <div class="success-state" hidden>
      <span class="success-mark">${icons.shield}</span>
      <h2>Request received</h2>
      <p id="success-message"></p>
      <button class="button dialog-done" type="button">Done</button>
    </div>
  </dialog>`;
}

// Renders the FAQs
function faqSection() {
  const faqs = [
    [
      "What is included in the base price?", 
      "Your package includes accommodation, scheduled destination transfers, guided activities listed in the itinerary, and select meals. International transport and personal expenses are not included."
    ],
    [
      "How do group prices work?", 
      "The displayed rate is per person. Select your party size in the reservation form for an instant package estimate. Groups of six or more can request a tailored quotation."
    ],
    [
      "Can I check a date before paying?", 
      "Yes. Reservation requests are free and do not require payment. We confirm your preferred date first, then send a secure payment schedule."
    ],
    [
      "Can an itinerary be customized?", 
      "Absolutely. The listed itineraries are thoughtfully paced starting points. Tell us about dietary needs, accessibility requirements, or special interests in your follow-up consultation."
    ],
    [
      "What is your cancellation policy?", 
      "You may cancel without charge before accepting your final quotation. Confirmed trips follow the cancellation terms shown with your payment schedule."
    ]
  ];

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

// HOME PAGE SECTION

// Homepage banner
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
      </div>
    </div>
  </section>`;
}

// Seven-nation grid
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

// About Us part
function promiseSection() {
  return `<section class="promise section" id="why-us">
    <div class="promise-image">
      <img src="${packages.liyue.directorImage}" alt="Mountains and river in Liyue" loading="lazy">
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

// Builds the Home Page HTML
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

// NATION DETAIL PAGE
// Builds the Nation Page dynamically using its key in `packages`
function nationPage(key) {
  const p = packages[key] || packages.mondstadt;
  const others = packageList.filter(([k]) => k !== key).slice(0, 3);
  
  return `${header()}
  <main class="nation-page" style="--nation-color:${p.color}">
    <section class="nation-hero">
      <img src="${p.image}" alt="${p.nation} destination landscape">
      <div class="hero-shade"></div>
      <div class="nation-hero-content">
        <span>${p.eyebrow}</span>
        <h1>${p.nation}</h1>
        <p>${p.title}</p>
      </div>
    </section>
    
    <!-- Package Summary & Sticky Pricing Card -->
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
    
    <!-- Single-Open Collapsible Day-by-Day Itinerary -->
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
    
    <!-- Highlighted Landmarks Grid -->
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

// INTERACTIVE BEHAVIORS & EVENT LISTENERS
function initializeInteractions() {
  // Dynamic Sub-Options for other travel services
  const serviceOptions = {
    passport: {
      label: "Passport application type",
      choices: [
        "New Passport Application",
        "Passport Renewal",
        "Damaged or Lost Passport Replacement",
        "Expedited / Rush Processing"
      ]
    },
    documents: {
      label: "Document or permit needed",
      choices: [
        "Cross-Border Visa & Entry Clearance",
        "Travel Insurance & Medical Coverage",
        "Special Excursion & Heritage Permits",
        "Document Authentication & Notarization"
      ]
    },
    lodging: {
      label: "Accommodation upgrade preference",
      choices: [
        "Private Cliffside or Lakeside Villa",
        "Heritage Suite & Penthouse Upgrade",
        "Private Butler & In-Villa Dining",
        "Extended Stay / Extra Nights"
      ]
    }
  };

  const serviceCategory = document.querySelector("#service-category");
  const serviceSubLabel = document.querySelector("#service-sub-label");
  const serviceSubSelect = document.querySelector("#service-sub-select");

  // Rebuilds the secondary dropdown whenever the main service category changes
  const updateServiceSubOptions = () => {
    if (!serviceCategory || !serviceSubSelect || !serviceSubLabel) return;
    const config = serviceOptions[serviceCategory.value] || serviceOptions.passport;
    serviceSubLabel.textContent = config.label;
    serviceSubSelect.innerHTML = config.choices
      .map(choice => `<option value="${choice}">${choice}</option>`)
      .join("");
  };

  serviceCategory?.addEventListener("change", updateServiceSubOptions);
  updateServiceSubOptions();

  // Light&Dark mode
  const root = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");
  const savedTheme = localStorage.getItem("celestia-theme");
  const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (preferredDark ? "dark" : "light");
  root.dataset.theme = initialTheme;

  const updateThemeIcon = () => {
    if (themeToggle) {
      themeToggle.innerHTML = root.dataset.theme === "dark" ? icons.sun : icons.moon;
    }
  };
  updateThemeIcon();

  themeToggle?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    localStorage.setItem("celestia-theme", nextTheme);
    updateThemeIcon();
  });

  // Mobile menu
  const menuButton = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeMobileMenu = () => {
    mobileMenu?.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    if (menuButton) menuButton.innerHTML = icons.menu;
  };

  menuButton?.addEventListener("click", () => {
    const open = mobileMenu?.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(Boolean(open)));
    menuButton.innerHTML = open ? icons.close : icons.menu;
  });

  mobileMenu?.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("click", closeMobileMenu);
  });

  // Multi-Step Booking Modal & Live Pricing
  const dialog = document.querySelector(".booking-dialog");
  const select = document.querySelector("#booking-package");
  const travelers = document.querySelector("#traveler-count");
  const total = document.querySelector("#booking-total");
  const steps = document.querySelectorAll(".modal-step");
  const successState = document.querySelector(".success-state");
  const intentRadios = document.querySelectorAll('input[name="intent"]');
  const nextBtn = document.querySelector("#intent-next-btn");

  const showStep = (stepId) => {
    steps.forEach(s => { s.hidden = s.id !== stepId; });
    if (successState) successState.hidden = true;
  };

  const resetModal = () => {
    intentRadios.forEach(r => { r.checked = false; });
    if (nextBtn) nextBtn.hidden = true;
    showStep("step-choose");
  };

  // locks traveler count between 1 and 10 and calculates live total in Philippine pesos
  const updateTotal = () => {
    if (!total) return;
    if (travelers) {
      const digitsOnly = travelers.value.replace(/\D/g, "");
      if (digitsOnly === "") {
        travelers.value = "";
      } else {
        travelers.value = String(Math.min(10, Math.max(1, Number(digitsOnly))));
      }
    }
    const count = Math.min(10, Math.max(1, Number(travelers?.value) || 1));
    const selected = packages[select?.value] || packages.mondstadt;
    total.textContent = peso.format(selected.price * count);
  };

  // Next button shows upon selecting one of the options
  intentRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (nextBtn) nextBtn.hidden = false;
    });
  });

  // Proceed with selected option
  nextBtn?.addEventListener("click", () => {
    const chosen = document.querySelector('input[name="intent"]:checked')?.value;
    if (chosen === "package") showStep("step-package");
    else if (chosen === "inquiry") showStep("step-inquiry");
    else if (chosen === "services") showStep("step-services");
  });

  // Back to first step modal
  document.querySelectorAll(".step-back").forEach(btn => {
    btn.addEventListener("click", () => showStep("step-choose"));
  });

  // Open modal triggers (Nation CTA pre-selects package; general CTAs start at Step 1)
  document.querySelectorAll(".open-booking").forEach(button => button.addEventListener("click", () => {
    const key = button.dataset.package;
    updateTotal();
    if (key && select) {
      select.value = key;
      updateTotal();
      showStep("step-package");
    } else {
      resetModal();
    }
    dialog?.showModal();
    document.body.classList.add("modal-open");
  }));

  // Close modal via close button, Done button, Escape key, or  click outside modal
  document.querySelector(".dialog-close")?.addEventListener("click", () => dialog?.close());
  document.querySelector(".dialog-done")?.addEventListener("click", () => dialog?.close());
  dialog?.addEventListener("close", () => document.body.classList.remove("modal-open"));
  dialog?.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });

  // Prevent non-numeric characters in traveler count input
  travelers?.addEventListener("keydown", e => {
    if (["-", "+", "e", "E", "."].includes(e.key)) e.preventDefault();
  });
  select?.addEventListener("change", updateTotal);
  travelers?.addEventListener("input", updateTotal);
  travelers?.addEventListener("blur", () => {
    if (!travelers.value || Number(travelers.value) < 1) travelers.value = "1";
    updateTotal();
  });
  updateTotal();

  // Enforce minimum of tomorrow on all date pickers
  document.querySelectorAll('input[type="date"]').forEach(input => {
    input.min = new Date(Date.now() + 86400000).toISOString().split("T")[0];
  });

  // Save submission to localStorage and show personalized confirmation
  document.querySelectorAll(".modal-form").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      const requestType = form.dataset.type;
      localStorage.setItem("celestia-latest-request", JSON.stringify({
        type: requestType,
        ...data,
        submittedAt: new Date().toISOString()
      }));

      const detailText = data.serviceDetail ? ` (${data.serviceDetail})` : "";
      const msg = document.querySelector("#success-message");
      if (msg) {
        msg.textContent = `Thank you for choosing Celestia Passage, ${data.name}. We’ve received your ${requestType.toLowerCase()}${detailText} and will reach out to ${data.email} within one business day.`;
      }

      steps.forEach(s => { s.hidden = true; });
      if (successState) successState.hidden = false;
      form.reset();
      updateServiceSubOptions();
    });
  });

  // Only allow 1 Itinerary to open at a time
  const itineraryItems = document.querySelectorAll(".itinerary-details");
  itineraryItems.forEach(item => {
    const summary = item.querySelector("summary");
    const wrapper = item.querySelector(".itinerary-animation-wrapper");

    summary.addEventListener("click", e => {
      e.preventDefault();
      wrapper.getAnimations().forEach(anim => anim.cancel());

      if (item.open) {
        // Animate height down to 0 before closing <details>
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
        // Close any other currently open day before expanding the clicked one
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

  // Scroll to reveal backtotop button
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("revealed"); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll(".journey-card, .section-intro, .section-heading, .timeline article, .stop-grid > div, .more-grid > a").forEach(el => { el.classList.add("reveal"); observer.observe(el); });

  const backToTopBtn = document.querySelector(".back-to-top");
  const toggleBackToTop = () => {
    if (!backToTopBtn) return;
    backToTopBtn.classList.toggle("visible", window.scrollY > 120);
  };

  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();

  backToTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// APPLICATION ENTRY POINT & ROUTING

// Injects either the Home Page or a Nation Page into #app based on the body[data-page]
function renderApp() {
  const app = document.querySelector("#app");
  if (!app) {
    console.warn("Celestia Passage: #app container not found. Initializing interactions on existing DOM.");
    initializeInteractions();
    return;
  }

  const page = document.body.dataset.page;
  const nation = document.body.dataset.nation;
  app.innerHTML = page === "nation" ? nationPage(nation) : homePage();
  initializeInteractions();
}

// Initialize immediately if DOM is already parsed, otherwise wait for DOMContentLoaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderApp);
} else {
  renderApp();
}
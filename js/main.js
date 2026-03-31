(() => {
  const APPS = [
    {
      id: "hexshift",
      name: "Hex Shift",
      type: "Arcade Puzzle",
      logo: "images/HexShiftLogoDark.png",
      statusLabel: "LIVE",
      statusClass: "status-live",
      tagline: "A neon hex puzzler built for quick runs, streaks, and leaderboard chasing.",
      description:
        "Hex Shift is a fast-paced iOS puzzle game built around rotating groups of hexes, triggering combos, and surviving increasingly chaotic boards. It includes multiple modes, Game Center leaderboards, optional ad removal, and a dedicated support page for players.",
      meta: ["iPhone", "iPad", "Game Center", "Ad-supported"],
      links: [
        { label: "Support", href: "hexshift-support.html" },
        { label: "Privacy Policy", href: "hexshift-privacypolicy.html" }
      ]
    },
    {
      id: "picket-list",
      name: "Picket List",
      type: "Utility App",
      logo: "images/PicketListAppLogo.png",
      statusLabel: "LAUNCHING SOON",
      statusClass: "status-soon",
      tagline: "A practical tool for organising picket jobs, lists, and on-site planning.",
      description:
        "Picket List is a focused utility app designed to make planning simpler and reduce the back-and-forth around lists, prep, and field work. Its launch support is being set up now, including a privacy policy page that is ready to link from the App Store.",
      meta: ["iPhone", "Utility", "Launch Ready"],
      links: [
        { label: "Privacy Policy", href: "picketlist-privacypolicy.html" }
      ]
    }
  ];

  const $ = (sel) => document.querySelector(sel);

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderLinks(links) {
    return links
      .map(
        (link) =>
          `<a href="${escapeHtml(link.href)}" class="project-link">${escapeHtml(link.label)} →</a>`
      )
      .join("");
  }

  function appCardHTML(app) {
    return `
      <article class="card app-card" id="${escapeHtml(app.id)}">
        <div class="card-pad">
          <div class="project-header">
            <div class="app-heading">
              <img class="app-logo" src="${escapeHtml(app.logo)}" alt="${escapeHtml(app.name)} logo" />
              <div>
                <span class="app-type">${escapeHtml(app.type)}</span>
                <h3>${escapeHtml(app.name)}</h3>
                <p class="app-tagline">${escapeHtml(app.tagline)}</p>
              </div>
            </div>
            <span class="project-status ${escapeHtml(app.statusClass)}">${escapeHtml(app.statusLabel)}</span>
          </div>
          <div class="app-meta">
            ${app.meta.map((item) => `<span class="meta-pill">${escapeHtml(item)}</span>`).join("")}
          </div>
          <p>${escapeHtml(app.description)}</p>
          <div class="app-links">
            ${renderLinks(app.links)}
          </div>
        </div>
      </article>
    `;
  }

  function resourceCardHTML(app) {
    return `
      <article class="card resource-entry">
        <div class="card-pad">
          <div class="resource-top">
            <div class="app-heading">
              <img class="app-logo app-logo-small" src="${escapeHtml(app.logo)}" alt="${escapeHtml(app.name)} logo" />
              <div>
                <span class="app-type">${escapeHtml(app.type)}</span>
                <h3>${escapeHtml(app.name)}</h3>
              </div>
            </div>
            <span class="project-status ${escapeHtml(app.statusClass)}">${escapeHtml(app.statusLabel)}</span>
          </div>
          <p class="muted">Support and launch documents for ${escapeHtml(app.name)}.</p>
          <div class="app-links">
            ${renderLinks(app.links)}
          </div>
        </div>
      </article>
    `;
  }

  function renderHome() {
    const featured = $("#featured-apps");
    if (!featured) return;
    featured.innerHTML = APPS.map(appCardHTML).join("");
  }

  function renderAppsPage() {
    const appsList = $("#apps-list");
    if (!appsList) return;
    appsList.innerHTML = APPS.map(appCardHTML).join("");
  }

  function renderResourcesPage() {
    const resources = $("#resources-list");
    if (!resources) return;
    resources.innerHTML = APPS.map(resourceCardHTML).join("");
  }

  const menuToggle = $("#menu-toggle");
  const drawer = $("#mobile-drawer");

  function setDrawer(open) {
    if (!menuToggle || !drawer) return;

    if (open) {
      menuToggle.classList.add("active");
      menuToggle.setAttribute("aria-expanded", "true");
      drawer.classList.add("active");
      drawer.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    } else {
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      drawer.classList.remove("active");
      drawer.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  }

  function attachDrawer() {
    if (!menuToggle || !drawer) return;
    menuToggle.addEventListener("click", () => setDrawer(!drawer.classList.contains("active")));
    drawer.addEventListener("click", (e) => {
      if (e.target === drawer) setDrawer(false);
    });
    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setDrawer(false));
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderHome();
    renderAppsPage();
    renderResourcesPage();
    attachDrawer();
  });
})();

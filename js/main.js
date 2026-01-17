(() => {
  // =========================
  // POSTS DATA (single source of truth)
  // index.html + devlog.html both render from this
  // =========================
  const POSTS = [
    {
      id: "2026-01-17",
      title: "Dev Log — Breaking Down the Core Loop: The Dev Cycle",
      dateLabel: "17 Jan 2026",
      excerpt:
        "Today being a rest day I've taken some time to think about the core game loop",
      paragraphs: [
        "Lately I’ve been spending a lot of time thinking about what the actual heart of this game is. Not features, not UI, not polish — but the loop you’re going to repeat over and over as a player. The tricky part is making something that feels realistic and layered without turning into a boring or overly repetitive grind, which is kind of the constant battle with tycoon-style games.",
        "At its simplest, the core of the game is what I’m calling the dev cycle.",
        "When you start developing a game, you’re committing to the full process — not just writing code and hitting “publish.” The money it costs to begin development is tied to the real cost of putting a game out into the world. That includes things like marketing and other overhead, not just development time. You’re basically front-loading that commitment instead of pretending games magically appear once a progress bar fills.",
        "One thing I’m still experimenting with is how much flexibility the player has during development, especially early on as a solo dev. I like the idea of being able to hire out certain aspects of development — maybe art, audio, or marketing — to speed things up or get better results than you’d manage alone. The trade-off is obvious: you lose money or long-term profit, but you gain time and quality. It adds an extra layer of decision-making without forcing it on the player if they’d rather do everything themselves.",
        "Beyond just the project itself, everything around you plays into the loop too. The computer you’re using, the desk, the chair — even the space you’re working in — all come with their own perks and drawbacks. Faster work speeds, lower fatigue, reduced stress, higher efficiency… nothing is strictly better, just different. Some setups let you grind harder, others help you last longer without burning out. The goal is to let players decide what they want to prioritise instead of pushing one optimal build.",
        "Once a game is released, the cycle doesn’t just end. That’s where the support phase comes in. After launch, you can continue updating and supporting your game — fixing bugs, improving quality, and extending its lifespan. The catch is that while you’re supporting a game, you’re not making a new one. Your focus is locked in. You can keep updating, but only so many times, and over time the game naturally loses relevance and interest until it eventually fades out and gets lost in the ether like most real games do.",
        "At that point, you have to make a call: keep supporting a dying title, or let it go and move on to the next project.",
        "That’s the loop at its most basic: develop → release → support → move on.",
        "There’s a lot more depth planned on top of this — sales simulation, player interest, quality decay, long-term strategy — but none of that matters if the core loop doesn’t feel solid and believable. Right now, the goal is to make every decision feel like a trade-off instead of a checklist, and to make progress feel earned without turning the game into busywork.",
        "It’s still early, and a lot of this will change as it gets tested and broken, but this is the foundation everything else is being built on.",
      ],
      images: [] // add images here later if you want
    },
    {
      id: "2026-01-16",
      title: "Dev Log — Art Overhaul Mode (Finally)",
      dateLabel: "16 Jan 2026",
      excerpt:
        "With the core systems finally locked in, I’ve shifted focus to a full art and UI overhaul across the entire game.",
      paragraphs: [
        "Today I caught up with a mate to get some help and direction on the full redesign of the game’s art. I’ve been itching to do this for a while, but I didn’t want to sink time into visuals until I knew the actual game systems were going to hold up. Now that I’ve proven to myself I can program a pretty complex foundation — one that’s almost good enough to support the core loop I’m chasing — it feels like the right time to shift gears.",
        "Don’t get me wrong, there’s still a tonne of work left to do and the game is nowhere near “done”, but the important part is the base is solid. The logic, the structure, the flow… it’s all finally starting to feel like a real game instead of a pile of test systems. So I’m giving myself a bit of a breather from heavy programming for a moment and focusing on the part that’s going to make everything feel real: the presentation.",
        "Over the next stretch I’ll be putting most of my time into reworking the entire look of the game — all the art, menus, and UI. I want the game to have a clear style and vibe that matches what I’ve had in my head from the start. That means redesigning everything properly, not just patching things up.",
        "On the UI side, I’ll be adding a proper in-game ESC menu so you can access settings, quit to the main menu, or exit to desktop cleanly. I’m also planning a full overhaul of the inventory, and I’ll be rebuilding the HUD into something way cleaner and more readable. Right now it does the job, but it’s not the vibe, and it definitely doesn’t feel polished.",
        "For the next few days I’ll basically be living in calls with my artist, going back and forth until everything starts landing exactly how we want it. Once the visuals and UI are in a way better place, I’ll jump back into the programming side and start going deeper into the core systems again — but this time with a game that actually looks like the game it’s meant to be.",
        "Pretty excited for this part. The code might be the backbone, but the art is what makes it feel alive."
      ],
      images: [] // add images here later if you want
    },
    {
      id: "2026-01-15",
      title: "Dev Log – Locking in the Core Development Loop",
      dateLabel: "15 Jan 2026",
      excerpt:
        "This was one of the biggest milestones so far — locking in the full dev loop from start to finish.",
      paragraphs: [
        "This has been one of the biggest development milestones so far, and honestly one of the most important ones to get right before moving forward. Over the last stretch of work, the focus hasn’t been on adding flashy features, but on properly locking in the entire game development loop from start to finish. I wanted to make sure that making a game, developing it, publishing it, supporting it, and finally moving on all feel like real, connected systems rather than disconnected menus or progress bars.",
        "At the core of this update is the fact that development is now fully driven by time. Progress doesn’t magically jump forward or tick up just because you clicked a button. Hours are earned minute by minute through the in-game clock, sleeping correctly skips time without breaking anything, and development only advances when a real hour of work has actually passed. This was crucial to making the game feel grounded and believable rather than gamey or exploitable.",
        "Once a project is started, it moves through a clear lifecycle. During development, the game builds up progress while also carrying an inherent bug risk that’s influenced by the player’s decisions, such as genre and programming language. More bugs mean worse starting quality, and that trade-off is intentional. When development finishes, the game becomes ready to publish, and once published, sales begin immediately. There’s no hidden delay or fake buffer — the game is out in the world, and its performance is now affected by the choices made during development.",
        "After release, the game enters a proper support phase. This is where updates come into play. Updates don’t cost money yet, but they do cost player fatigue and time, and they exist to reduce bugs and increase quality over time. Importantly, support progress now starts at zero, not at some artificial 100%, and quality doesn’t reset or drop incorrectly when entering this phase. The quality you publish with is the baseline, and every update builds on top of that. Bugs are tracked from their starting count at release, and quality improves as bugs are fixed. Once bugs drop below a certain threshold, the player can finish support permanently, locking the game and freeing themselves up to start the next project.",
        "A lot of effort also went into separating how information is presented. The in-game computer is now the place where full control happens — starting projects, publishing games, managing updates, and making decisions. The phone, on the other hand, is designed as a lightweight, always-available snapshot. It mirrors exactly what the computer shows, but without buttons or interaction. This means you can keep an eye on development or support progress while walking around, without opening menus or pausing the flow of the game. Under the hood, it’s signal-driven and optimised so it updates only when something actually changes.",
        "Behind the scenes, the save system has been tightened up significantly. Active projects, completed games, released titles, support states, bugs, quality, and future sales data are all persisted cleanly. You can save at any point — mid-development, mid-support, or post-release — and everything restores exactly as it should. At the same time, the codebase itself has been cleaned up and tagged so systems are clearly separated and readable, making future additions far less risky.",
        "With this foundation in place, the game is now ready to move into the next major phase: sales simulation. This will introduce long-term performance, revenue decay, the impact of updates over time, and eventually the deeper strategy of balancing quality, bugs, timing, and player fatigue. But none of that would matter if the core loop wasn’t solid — and now it finally is."
      ],
      images: [
        "images/BlogPost 1-1.png",
        "images/BlogPost 1-2.png",
        "images/BlogPost 1-3.png",
        "images/BlogPost 1-6.png",
        "images/BlogPost 1-7.png",
        "images/BlogPost 1-8.png"
      ]
    }
  ];

  // newest first
  POSTS.sort((a, b) => (a.id < b.id ? 1 : -1));

  // =========================
  // Helpers
  // =========================
  const $ = (sel) => document.querySelector(sel);

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function postCardHTML(post, { previewOnly = false } = {}) {
    const paras = previewOnly
      ? `<p>${escapeHtml(post.excerpt)}</p>`
      : post.paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join("");

    const gallery = (!previewOnly && post.images && post.images.length)
      ? `
        <div class="image-gallery" aria-label="Devlog images">
          ${post.images.map(src => `<img src="${escapeHtml(src)}" alt="${escapeHtml(post.title)} image" data-lightbox="1">`).join("")}
        </div>
      `
      : ``;

    return `
      <article class="card devlog-entry" data-post-id="${escapeHtml(post.id)}" role="button" tabindex="0">
        <div class="card-pad">
          <div class="devlog-header">
            <h4>${escapeHtml(post.title)}</h4>
            <time>${escapeHtml(post.dateLabel)}</time>
          </div>
          <span class="hint">Click to read more</span>
          ${paras}
          ${gallery}
        </div>
      </article>
    `;
  }

  // =========================
  // Render: index snapshots
  // =========================
  function renderIndex() {
    const latestPostsWrap = $("#latest-posts");
    if (latestPostsWrap) {
      latestPostsWrap.innerHTML = POSTS.slice(0, 2)
        .map(p => postCardHTML(p, { previewOnly: true }))
        .join("");
    }

    const snap = $("#latest-devlog-snapshot");
    if (snap) {
      const p = POSTS[0];
      snap.innerHTML = `
        <div class="mini">
          <div class="mini-title">${escapeHtml(p.title)}</div>
          <div class="mini-date">${escapeHtml(p.dateLabel)}</div>
          <div class="mini-excerpt">${escapeHtml(p.excerpt)}</div>
        </div>
      `;
    }
  }

  // =========================
  // Render: devlog list (full)
  // =========================
  function renderDevlogPage() {
    const list = $("#devlog-list");
    if (!list) return;
    list.innerHTML = POSTS.map(p => postCardHTML(p, { previewOnly: true })).join("");
  }

  // =========================
  // Modal + Lightbox
  // =========================
  function openModalForPost(postId) {
    const modal = $("#devlog-modal");
    const body = $("#devlog-modal-body");
    if (!modal || !body) return;

    const post = POSTS.find(p => p.id === postId);
    if (!post) return;

    body.innerHTML = `
      <h4>${escapeHtml(post.title)}</h4>
      <time>${escapeHtml(post.dateLabel)}</time>
      ${post.paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join("")}
      ${
        (post.images && post.images.length)
          ? `<div class="image-gallery">
              ${post.images.map(src => `<img src="${escapeHtml(src)}" alt="${escapeHtml(post.title)} image" data-lightbox="1">`).join("")}
             </div>`
          : ``
      }
    `;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    const modal = $("#devlog-modal");
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    if (!($("#lightbox")?.classList.contains("active"))) {
      document.body.style.overflow = "";
    }
  }

  function openLightbox(src, alt) {
    const lb = $("#lightbox");
    const img = $("#lightbox-img");
    if (!lb || !img) return;
    img.src = src;
    img.alt = alt || "Expanded view";
    lb.classList.add("active");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    const lb = $("#lightbox");
    if (!lb) return;
    lb.classList.remove("active");
    lb.setAttribute("aria-hidden", "true");
    if (!($("#devlog-modal")?.classList.contains("active"))) {
      document.body.style.overflow = "";
    }
  }

  // =========================
  // Click handling (NO double clicks)
  // =========================
  function attachPostClicks() {
    document.body.addEventListener("click", (e) => {
      const img = e.target.closest("img[data-lightbox='1']");
      if (img) {
        e.stopPropagation();
        openLightbox(img.src, img.alt);
        return;
      }

      const card = e.target.closest(".devlog-entry");
      if (card) {
        const id = card.getAttribute("data-post-id");
        // On devlog list and index previews, open modal only if modal exists (devlog.html)
        if ($("#devlog-modal")) openModalForPost(id);
        else window.location.href = "devlog.html";
      }
    });

    document.body.addEventListener("keydown", (e) => {
      const card = document.activeElement && document.activeElement.classList?.contains("devlog-entry")
        ? document.activeElement
        : null;

      if (card && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        const id = card.getAttribute("data-post-id");
        if ($("#devlog-modal")) openModalForPost(id);
        else window.location.href = "devlog.html";
      }

      if (e.key === "Escape") {
        closeLightbox();
        closeModal();
        setDrawer(false);
      }
    });

    // Modal close
    $("#modal-close")?.addEventListener("click", () => closeModal());
    $("#devlog-modal")?.addEventListener("click", (e) => {
      if (e.target && e.target.id === "devlog-modal") closeModal();
    });

    // Lightbox close
    $("#lightbox")?.addEventListener("click", () => closeLightbox());
  }

  // =========================
  // Drawer
  // =========================
  const menuToggle = $("#menu-toggle");
  const drawer = $("#mobile-drawer");

  function setDrawer(open){
    if(!menuToggle || !drawer) return;

    if(open){
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
      // only clear overflow if no modal/lightbox
      const modalOpen = $("#devlog-modal")?.classList.contains("active");
      const lbOpen = $("#lightbox")?.classList.contains("active");
      if(!modalOpen && !lbOpen) document.body.style.overflow = "";
    }
  }

  function attachDrawer() {
    if(menuToggle && drawer){
      menuToggle.addEventListener("click", () => setDrawer(!drawer.classList.contains("active")));
      drawer.addEventListener("click", (e) => { if(e.target === drawer) setDrawer(false); });
      drawer.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setDrawer(false)));
    }
  }

  // =========================
  // Init
  // =========================
  document.addEventListener("DOMContentLoaded", () => {
    renderIndex();
    renderDevlogPage();
    attachDrawer();
    attachPostClicks();
  });
})();

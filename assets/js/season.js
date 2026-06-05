/**
 * Seasons: theme config + helpers shared by the front page and story pages.
 *
 * Each season defines its accent emoji, the floating particles that drift
 * down (blossoms / fireflies / leaves / snow), how many stars to scatter,
 * and the palette of flowers that grow in the garden border.
 *
 * Flower palette entries are functions so they're only built when FLOWERS
 * is available (the front page). They are skipped safely elsewhere.
 */
(function () {
  const F = window.FLOWERS || null;

  const SEASONS = {
    spring: {
      label: "Spring",
      emoji: "🌸",
      particles: ["🌸", "❀", "✿", "🌷"],
      stars: 80,
      flowers: F && [
        () => F.tulip("#ff9ecb", "#d6498f"),
        () => F.tulip("#c39bff", "#7b4fd6"),
        () => F.daisy("#fffafc", "#ffcf4d"),
        () => F.rose("#ffd1dc", "#d46a8b"),
        () => F.tulip("#ff8b6b", "#d63f4f"),
        () => F.daisy("#fff0f6", "#ff8fab"),
      ],
    },
    summer: {
      label: "Summer",
      emoji: "☀️",
      particles: ["✨", "🌟", "🌼", "🐝"],
      stars: 55,
      flowers: F && [
        () => F.daisy("#ffd24d", "#7a4a1f"),   // sunflower
        () => F.rose("#ff6b6b", "#c0392b"),
        () => F.tulip("#ffb347", "#e0892e"),
        () => F.daisy("#fff5cc", "#e0a82e"),
        () => F.rose("#ff8fab", "#d63f6b"),
        () => F.daisy("#ffd24d", "#7a4a1f"),   // sunflower
      ],
    },
    autumn: {
      label: "Autumn",
      emoji: "🍂",
      particles: ["🍂", "🍁", "🍃"],
      stars: 90,
      flowers: F && [
        () => F.rose("#d98841", "#a8521f"),
        () => F.tulip("#e0892e", "#b5531c"),
        () => F.daisy("#ffe0a3", "#c47a1f"),
        () => F.rose("#c0563c", "#7a2f1f"),
        () => F.tulip("#cf8b3a", "#9a4a1c"),
        () => F.daisy("#ffcf8a", "#b5651f"),
      ],
    },
    winter: {
      label: "Winter",
      emoji: "❄️",
      particles: ["❄", "❅", "❆", "✦"],
      stars: 120,
      flowers: F && [
        () => F.rose("#dce9f5", "#9fbcd6"),
        () => F.daisy("#ffffff", "#cfe2f5"),
        () => F.tulip("#cfe2f5", "#8aa9c4"),
        () => F.daisy("#eaf4ff", "#bcd6ee"),
        () => F.rose("#eef6ff", "#aac6e0"),
        () => F.tulip("#e0eefb", "#9ab6d2"),
      ],
    },
  };

  const ORDER = ["spring", "summer", "autumn", "winter"];

  // Northern-hemisphere season from a date.
  function detectSeason(date = new Date()) {
    const m = date.getMonth(); // 0-11
    if (m >= 2 && m <= 4) return "spring";
    if (m >= 5 && m <= 7) return "summer";
    if (m >= 8 && m <= 10) return "autumn";
    return "winter";
  }

  function saved() {
    try { return localStorage.getItem("bedtime-season"); } catch (e) { return null; }
  }
  function save(season) {
    try { localStorage.setItem("bedtime-season", season); } catch (e) {}
  }

  // (Re)build the falling particles for a season.
  function renderParticles(season) {
    document.querySelectorAll(".petal").forEach((el) => el.remove());
    const chars = SEASONS[season].particles;
    for (let i = 0; i < 14; i++) {
      const p = document.createElement("span");
      p.className = "petal";
      p.textContent = chars[i % chars.length];
      p.style.left = Math.random() * 100 + "vw";
      p.style.animationDuration = (9 + Math.random() * 10).toFixed(1) + "s";
      p.style.animationDelay = (Math.random() * 12).toFixed(1) + "s";
      p.style.fontSize = (0.9 + Math.random() * 1.1).toFixed(2) + "rem";
      document.body.appendChild(p);
    }
  }

  // (Re)build the flower garden border for a season (front page only).
  function renderGarden(season) {
    const garden = document.querySelector(".garden");
    if (!garden || !SEASONS[season].flowers) return;
    garden.innerHTML = "";
    const palette = SEASONS[season].flowers;
    const n = Math.min(11, Math.max(6, Math.floor(window.innerWidth / 130)));
    for (let i = 0; i < n; i++) {
      const wrap = document.createElement("div");
      wrap.innerHTML = palette[i % palette.length]();
      const flower = wrap.firstElementChild;
      const scale = (0.6 + Math.random() * 0.55).toFixed(2);
      flower.style.transform = `scale(${scale})`;
      flower.style.setProperty("--sway", (5 + Math.random() * 3).toFixed(1) + "s");
      garden.appendChild(flower);
    }
  }

  // (Re)build the starry sky for a season.
  function renderSky(season) {
    const sky = document.querySelector(".sky");
    if (!sky) return;
    sky.innerHTML = "";
    const count = SEASONS[season].stars;
    for (let i = 0; i < count; i++) {
      const s = document.createElement("span");
      s.className = "star";
      s.style.left = Math.random() * 100 + "vw";
      s.style.top = Math.random() * 100 + "vh";
      s.style.setProperty("--dur", (2 + Math.random() * 4).toFixed(2) + "s");
      s.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
      const size = (Math.random() * 2 + 1).toFixed(1);
      s.style.width = size + "px";
      s.style.height = size + "px";
      sky.appendChild(s);
    }
  }

  // Apply a season everywhere on the current page.
  function apply(season, persist = true) {
    if (!SEASONS[season]) season = detectSeason();
    document.body.dataset.season = season;
    if (persist) save(season);
    renderSky(season);
    renderParticles(season);
    renderGarden(season);
    document.querySelectorAll(".season-btn").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.season === season));
    });
  }

  // Build the selector buttons into a container (if present) and wire them up.
  function buildSelector(containerId, current) {
    const box = document.getElementById(containerId);
    if (!box) return;
    box.innerHTML = "";
    ORDER.forEach((key) => {
      const btn = document.createElement("button");
      btn.className = "season-btn";
      btn.type = "button";
      btn.dataset.season = key;
      btn.setAttribute("aria-pressed", String(key === current));
      btn.innerHTML = `<span class="season-emoji">${SEASONS[key].emoji}</span>${SEASONS[key].label}`;
      btn.addEventListener("click", () => apply(key));
      box.appendChild(btn);
    });
  }

  window.BedtimeSeason = { SEASONS, ORDER, detectSeason, saved, apply, buildSelector };
})();

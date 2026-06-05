/* Front page: sky, flowers, falling petals, and the story carousel. */
(function () {
  // ---- Starry sky ----
  const sky = document.querySelector(".sky");
  if (sky) {
    const count = 90;
    for (let i = 0; i < count; i++) {
      const s = document.createElement("span");
      s.className = "star";
      s.style.left = Math.random() * 100 + "vw";
      s.style.top = Math.random() * 70 + "vh";
      s.style.setProperty("--dur", (2 + Math.random() * 4).toFixed(2) + "s");
      s.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
      const size = (Math.random() * 2 + 1).toFixed(1);
      s.style.width = size + "px";
      s.style.height = size + "px";
      sky.appendChild(s);
    }
  }

  // ---- Flower garden ----
  const garden = document.querySelector(".garden");
  if (garden && window.FLOWERS) {
    const palettes = [
      () => FLOWERS.rose("#e0789e", "#a83c66"),
      () => FLOWERS.rose("#ffd1dc", "#d46a8b"),
      () => FLOWERS.tulip("#ff8b6b", "#d63f4f"),
      () => FLOWERS.tulip("#ffc36b", "#e0892e"),
      () => FLOWERS.tulip("#c39bff", "#7b4fd6"),
      () => FLOWERS.daisy("#fffafc", "#ffcf4d"),
      () => FLOWERS.daisy("#fff0f6", "#ff8fab"),
    ];
    const n = Math.min(11, Math.max(6, Math.floor(window.innerWidth / 130)));
    for (let i = 0; i < n; i++) {
      const wrap = document.createElement("div");
      wrap.innerHTML = palettes[i % palettes.length]();
      const flower = wrap.firstElementChild;
      const scale = (0.6 + Math.random() * 0.55).toFixed(2);
      flower.style.transform = `scale(${scale})`;
      flower.style.setProperty("--sway", (5 + Math.random() * 3).toFixed(1) + "s");
      garden.appendChild(flower);
    }
  }

  // ---- Falling petals ----
  const petalChars = ["🌸", "🌺", "❀", "✿"];
  for (let i = 0; i < 12; i++) {
    const p = document.createElement("span");
    p.className = "petal";
    p.textContent = petalChars[i % petalChars.length];
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (9 + Math.random() * 10).toFixed(1) + "s";
    p.style.animationDelay = (Math.random() * 12).toFixed(1) + "s";
    p.style.fontSize = (0.9 + Math.random() * 1.1).toFixed(2) + "rem";
    document.body.appendChild(p);
  }

  // ---- Build carousel cards ----
  const track = document.querySelector("#carousel");
  if (track && window.STORIES) {
    STORIES.forEach((story) => {
      const card = document.createElement("a");
      card.className = "card";
      card.href = `story.html?id=${encodeURIComponent(story.id)}`;
      const [a, b] = story.palette;
      card.innerHTML = `
        <div class="card-cover" style="background:linear-gradient(135deg, ${a}, ${b});">
          <span>${story.emoji}</span>
        </div>
        <div class="card-body">
          <h3>${story.title}</h3>
          <span class="card-subtitle">${story.subtitle}</span>
          <p class="card-excerpt">${story.excerpt}</p>
          <span class="card-meta">📖 ${story.minutes} min read</span>
        </div>`;
      track.appendChild(card);
    });

    // ---- Arrow navigation ----
    const step = () => {
      const card = track.querySelector(".card");
      return card ? card.offsetWidth + 22 : 320;
    };
    const prev = document.querySelector("#prev");
    const next = document.querySelector("#next");
    if (prev) prev.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
    if (next) next.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));

    // keyboard support
    track.setAttribute("tabindex", "0");
    track.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") track.scrollBy({ left: step(), behavior: "smooth" });
      if (e.key === "ArrowLeft") track.scrollBy({ left: -step(), behavior: "smooth" });
    });
  }
})();

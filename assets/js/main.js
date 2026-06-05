/* Front page: build the story carousel, then apply the seasonal theme. */
(function () {
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

  // ---- Seasonal theme ----
  if (window.BedtimeSeason) {
    const S = window.BedtimeSeason;
    const current = S.saved() || S.detectSeason();
    S.buildSelector("seasons", current);
    S.apply(current, false); // don't overwrite saved choice on initial load
  }
})();

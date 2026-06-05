/* Story page: renders a single story from STORIES based on ?id= */
(function () {
  // soft background sky reused from the front page
  const sky = document.querySelector(".sky");
  if (sky) {
    for (let i = 0; i < 70; i++) {
      const s = document.createElement("span");
      s.className = "star";
      s.style.left = Math.random() * 100 + "vw";
      s.style.top = Math.random() * 100 + "vh";
      s.style.setProperty("--dur", (2 + Math.random() * 4).toFixed(2) + "s");
      s.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
      sky.appendChild(s);
    }
  }

  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const story = (window.STORIES || []).find((s) => s.id === id);
  const root = document.querySelector("#story-root");
  if (!root) return;

  if (!story) {
    document.title = "Story not found — Bedtime Stories";
    root.innerHTML = `
      <a class="back-link" href="index.html">← Back to all stories</a>
      <h1>Story not found</h1>
      <p class="story-content">We couldn't find that story. It may have drifted off to dreamland.</p>`;
    return;
  }

  document.title = `${story.title} — Bedtime Stories`;
  const [a, b] = story.palette;
  const paragraphs = story.content.map((p) => `<p>${p}</p>`).join("");
  root.innerHTML = `
    <a class="back-link" href="index.html">← Back to all stories</a>
    <div class="story-cover" style="background:linear-gradient(135deg, ${a}, ${b});">${story.emoji}</div>
    <h1>${story.title}</h1>
    <p class="subtitle">${story.subtitle}</p>
    <p class="meta">📖 ${story.minutes} min read</p>
    <div class="story-content">${paragraphs}</div>
    <p class="story-end">— The End —</p>`;
})();

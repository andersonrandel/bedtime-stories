/* Story page: renders a single story from STORIES based on ?id= */
(function () {
  // Match the season chosen on the front page (or the current season).
  if (window.BedtimeSeason) {
    const S = window.BedtimeSeason;
    S.apply(S.saved() || S.detectSeason(), false);
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

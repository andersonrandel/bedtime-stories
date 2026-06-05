/**
 * Realistic flower illustrations rendered as inline SVG.
 * Each function returns an <svg> string. Gradients and layered petals
 * give them a soft, painterly, lifelike look.
 */
(function () {
  let uid = 0;
  const id = (p) => `${p}-${uid++}`;

  // --- A rose: layered, spiralling petals -------------------------------
  function rose(c1 = "#e0789e", c2 = "#a83c66", stem = "#3f7a3f") {
    const g = id("rose"), gc = id("rosec");
    return `
    <svg class="flower" width="120" height="200" viewBox="0 0 120 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="${g}" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="${c1}"/>
          <stop offset="100%" stop-color="${c2}"/>
        </radialGradient>
        <linearGradient id="${gc}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#5aa15a"/>
          <stop offset="100%" stop-color="${stem}"/>
        </linearGradient>
      </defs>
      <path d="M60 95 C58 130 60 160 60 195" stroke="url(#${gc})" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M60 150 C40 140 30 150 32 168 C50 168 58 162 60 150Z" fill="#4e944e"/>
      <path d="M60 130 C82 122 92 132 88 150 C68 148 62 142 60 130Z" fill="#5aa15a"/>
      <g transform="translate(60 72)">
        <circle r="40" fill="url(#${g})"/>
        <path d="M0 -34 C20 -30 30 -10 24 12 C12 30 -12 30 -24 12 C-30 -10 -20 -30 0 -34Z" fill="${c2}" opacity="0.35"/>
        <path d="M0 -26 C16 -22 22 -6 17 10 C8 22 -8 22 -17 10 C-22 -6 -16 -22 0 -26Z" fill="${c1}" opacity="0.6"/>
        <path d="M0 -16 C10 -14 14 -2 10 8 C4 16 -4 16 -10 8 C-14 -2 -10 -14 0 -16Z" fill="${c2}"/>
        <circle r="5" fill="#ffe6b3"/>
      </g>
    </svg>`;
  }

  // --- A tulip ----------------------------------------------------------
  function tulip(c1 = "#ff8b6b", c2 = "#d63f4f", stem = "#3f7a3f") {
    const g = id("tul"), gc = id("tulc");
    return `
    <svg class="flower" width="110" height="210" viewBox="0 0 110 210" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${c1}"/>
          <stop offset="100%" stop-color="${c2}"/>
        </linearGradient>
        <linearGradient id="${gc}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#5aa15a"/>
          <stop offset="100%" stop-color="${stem}"/>
        </linearGradient>
      </defs>
      <path d="M55 88 L55 205" stroke="url(#${gc})" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M55 150 C30 138 18 150 20 175 C44 174 54 165 55 150Z" fill="#4e944e"/>
      <path d="M55 130 C82 120 95 135 90 158 C66 154 57 145 55 130Z" fill="#5aa15a"/>
      <g transform="translate(55 55)">
        <path d="M-30 6 C-30 -30 -10 -44 0 -44 C10 -44 30 -30 30 6 C30 30 14 40 0 40 C-14 40 -30 30 -30 6Z" fill="url(#${g})"/>
        <path d="M0 -44 C-6 -30 -8 10 0 40 C8 10 6 -30 0 -44Z" fill="${c2}" opacity="0.4"/>
        <path d="M-30 6 C-22 -16 -14 -28 -6 -40 C-12 -10 -12 18 -6 38 C-18 32 -28 22 -30 6Z" fill="${c1}" opacity="0.6"/>
      </g>
    </svg>`;
  }

  // --- A daisy ----------------------------------------------------------
  function daisy(petal = "#fff6ff", center = "#ffcf4d", stem = "#3f7a3f") {
    const gc = id("daic");
    let petals = "";
    for (let i = 0; i < 12; i++) {
      petals += `<ellipse transform="rotate(${i * 30})" cx="0" cy="-26" rx="8" ry="20" fill="${petal}" stroke="#ead7ea" stroke-width="0.5"/>`;
    }
    return `
    <svg class="flower" width="120" height="200" viewBox="0 0 120 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="${gc}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#5aa15a"/>
          <stop offset="100%" stop-color="${stem}"/>
        </linearGradient>
      </defs>
      <path d="M60 78 L60 198" stroke="url(#${gc})" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M60 150 C36 140 24 152 27 176 C50 174 59 165 60 150Z" fill="#4e944e"/>
      <g transform="translate(60 60)">
        ${petals}
        <circle r="15" fill="${center}"/>
        <circle r="15" fill="url(#${gc})" opacity="0"/>
        <circle r="11" fill="#e0a82e" opacity="0.5"/>
      </g>
    </svg>`;
  }

  window.FLOWERS = { rose, tulip, daisy };
})();

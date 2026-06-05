/**
 * Bedtime Stories — story data.
 *
 * To add a new story, copy one of the objects below and edit it.
 * - id:       a unique short slug (used in the URL, e.g. story.html?id=moon-rabbit)
 * - title:    the story title shown on the card and page
 * - subtitle: a short tagline shown under the title
 * - excerpt:  one or two sentences teased on the card
 * - emoji:    a single emoji used as the card's illustration
 * - palette:  ["#color1", "#color2"] for the card's cover gradient
 * - minutes:  approximate reading time
 * - content:  array of paragraphs (strings). Each becomes a <p> on the page.
 */
window.STORIES = [
  {
    id: "moon-rabbit",
    title: "The Moon Rabbit",
    subtitle: "A gentle journey to the night sky",
    excerpt: "A little rabbit climbs a ladder of moonbeams to visit the moon and learns why it glows so softly.",
    emoji: "🌙",
    palette: ["#3a3a6a", "#6a5acd"],
    minutes: 5,
    content: [
      "Once upon a quiet evening, when the stars had only just begun to wake, a little rabbit named Pip noticed a silver ladder spilling down from the moon.",
      "The rungs were made of moonbeams, cool and soft as ribbons. Pip pressed one paw against the lowest one. It held. So up, up, up Pip went, higher than the tallest tree, higher than the sleepy clouds.",
      "At the top sat the Moon, round and patient, glowing the colour of warm milk. \"Why do you shine so softly?\" Pip asked.",
      "\"So that no one is afraid of the dark,\" the Moon said. \"A little light is all anyone needs to find their way home.\"",
      "Pip curled up in a crater lined with stardust and, listening to the hush of the sky, drifted gently off to sleep.",
    ],
  },
  {
    id: "sleepy-lighthouse",
    title: "The Sleepy Lighthouse",
    subtitle: "Where the sea sings lullabies",
    excerpt: "Old Lighthouse keeps every ship safe at night — but who tucks in the lighthouse when the tide grows still?",
    emoji: "🌊",
    palette: ["#0f3460", "#16c2c2"],
    minutes: 6,
    content: [
      "At the edge of the world, where the land runs out of room, stood an old lighthouse with a great warm eye of light.",
      "Every night it swept its beam across the waves — turn, and turn, and turn — so that every little boat could find its way to harbour.",
      "But one calm evening, when the last sail had slipped safely home, the lighthouse felt very tired indeed.",
      "So the sea gathered up its softest waves and sang a lullaby, slow and salty and kind. The stars leaned in close like tiny lanterns.",
      "And for the first time in a hundred years, the sleepy lighthouse dimmed its light just a little, and rested until morning.",
    ],
  },
  {
    id: "garden-of-dreams",
    title: "The Garden of Dreams",
    subtitle: "Plant a wish, grow a dream",
    excerpt: "Every night a quiet gardener plants the wishes children whisper, and by morning they bloom into dreams.",
    emoji: "🌷",
    palette: ["#7b3f6b", "#e0789e"],
    minutes: 4,
    content: [
      "Beyond the last hill, behind a gate made of ivy, there is a garden that only opens after dark.",
      "A gentle gardener walks its rows each night, carrying a basket of whispered wishes — every hope a child breathed before sleep.",
      "She tucks each wish into the soft earth and waters it with a single drop of moonlight.",
      "By morning the wishes have grown into dreams: tall ones and small ones, some that smell of summer, some that sparkle like frost.",
      "And if you sleep very well tonight, perhaps one of them is already blooming, just for you.",
    ],
  },
  {
    id: "the-cloud-collector",
    title: "The Cloud Collector",
    subtitle: "A pocketful of sky",
    excerpt: "A small girl collects the fluffiest clouds in a jar to make the softest pillow in all the land.",
    emoji: "☁️",
    palette: ["#4a6fa5", "#a8c8ec"],
    minutes: 5,
    content: [
      "Nessa kept a glass jar on her windowsill, and into it she gathered the very softest clouds that floated by.",
      "She caught the cotton ones at noon and the rosy ones at dusk, screwing the lid tight so none could drift away.",
      "When the jar was full, she emptied it into a pillowcase and shook it gently until it puffed up like a fresh loaf of bread.",
      "That night Nessa laid her head on a pillow made of sky, and she dreamed she was floating, weightless and warm, above the whole sleeping world.",
      "In the morning she opened the jar again — ready to catch tomorrow's dreams.",
    ],
  },
  {
    id: "brave-little-firefly",
    title: "The Brave Little Firefly",
    subtitle: "The smallest light, the biggest heart",
    excerpt: "When the forest grows dark and the path is lost, the tiniest firefly discovers just how far a small light can shine.",
    emoji: "✨",
    palette: ["#2d4a2d", "#9bcf63"],
    minutes: 6,
    content: [
      "Fern was the smallest firefly in the whole meadow, with the dimmest little glow you ever saw.",
      "The other fireflies blazed bright and bold, but Fern's light was no bigger than a single grain of starlight.",
      "One night a lost fawn wandered into the deepest, darkest part of the wood, where even the moon could not reach.",
      "All the bright fireflies were too far away to hear — but tiny Fern was near. She flew to the fawn and glowed with all her might.",
      "It was only a small light. But in the great darkness, a small light was enough. Fern led the fawn home, step by gentle step, and learned that no light is ever too little to matter.",
    ],
  },
];

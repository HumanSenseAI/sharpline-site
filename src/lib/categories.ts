// Mirrors the category content from the main Sharpline app
// (src/lib/categories.ts there) - only name/tagline are used here, but kept
// as the full type for easy copy-paste sync if the app's copy changes.
export type Category = {
  key: string;
  name: string;
  tagline: string;
  why: string;
  constraint: string | null;
  wordLimit: number | null;
  hedgeScan?: boolean;
};

export const CATEGORIES: Category[] = [
  {
    key: "compression",
    name: "Compression",
    tagline: "Say it in one breath",
    why: "Executives lose the room in the first ten seconds if the point takes too long to land. This trains you to find the load-bearing sentence.",
    constraint: "Fit your answer in the word limit.",
    wordLimit: 40,
  },
  {
    key: "structure",
    name: "Structure",
    tagline: "Frame the answer",
    why: "An unstructured answer sounds like thinking out loud. A structured one sounds like judgement. Choose a frame before you speak, not after.",
    constraint: "Use a clear frame — e.g. Point → Reason → Example → Point",
    wordLimit: null,
  },
  {
    key: "precision",
    name: "Precision",
    tagline: "Cut the hedge",
    why: "Hedge words tell the room you don't trust your own judgement. Say the same thing without the padding.",
    constraint: "Hedge words get flagged.",
    wordLimit: null,
    hedgeScan: true,
  },
  {
    key: "narrative",
    name: "Narrative",
    tagline: "Make it a story",
    why: "People remember stories, not slides. A fact becomes memorable once it has a before, a turn, and a consequence.",
    constraint: null,
    wordLimit: null,
  },
  {
    key: "pressure",
    name: "Pressure",
    tagline: "Handle the hard question",
    why: "The room is watching how you take the hit, not just what you answer. Calm, clear, no defensiveness.",
    constraint: null,
    wordLimit: null,
  },
  {
    key: "headline",
    name: "Headline",
    tagline: "One line they'll remember",
    why: "If they remember one line, make it the one you chose — not whatever came out last.",
    constraint: "Fit your answer in the word limit.",
    wordLimit: 20,
  },
  {
    key: "listening",
    name: "Listening",
    tagline: "Reflect it back",
    why: "The most persuasive move in a room is proving you understood the other side before you answer it.",
    constraint: null,
    wordLimit: null,
  },
  {
    key: "presence",
    name: "Presence",
    tagline: "Open and close",
    why: "The first ten seconds set the room's attention. The last ten decide what they walk out remembering.",
    constraint: "Fit your answer in the word limit.",
    wordLimit: 30,
  },
];

export function getCategory(key: string): Category {
  const category = CATEGORIES.find((c) => c.key === key);
  if (!category) throw new Error(`Unknown category key: ${key}`);
  return category;
}

import { writeFileSync } from "node:fs";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// One sentence (170 chars): a bathroom object that has given up.
// Annoyance: teeth neglected because flossing is skipped. Invention: a
// toothbrush that accepts defeat. Mechanism: it only brushes the teeth
// still in use, and hands in its retirement papers after every skipped floss.
const text =
  "The Resigned Toothbrush only brushes the teeth you still use, having written off the rest as lost causes, and hands in its retirement papers every time you skip flossing.";
const root = dirname(fileURLToPath(import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const dest = join(out, "entry.txt");

try {
  mkdirSync(out, { recursive: true });
  writeFileSync(dest, text, "utf8");
  console.log("entry.txt written (" + text.length + " chars) from " + root);
} catch (failure) {
  console.error("entry.txt write failed:", failure);
  process.exit(1);
}

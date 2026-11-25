import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Absolute path derived from this file's own URL (never a relative path).
const scriptDir = dirname(fileURLToPath(import.meta.url));

// One sentence (170 chars): a bathroom object that has given up.
// Annoyance: teeth neglected because flossing is skipped. Invention: a
// toothbrush that accepts defeat. Mechanism: it only brushes the teeth
// still in use, and hands in its retirement papers after every skipped floss.
const sentence =
  "The Resigned Toothbrush only brushes the teeth you still use, having written off the rest as lost causes, and hands in its retirement papers every time you skip flossing.";

try {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
  console.log("wrote entry.txt (" + sentence.length + " chars) from " + scriptDir);
} catch (err) {
  console.error("failed to write entry.txt:", err);
  process.exit(1);
}

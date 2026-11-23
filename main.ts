// The Vacuum's Alibi: One Line, 200 Characters
// A robot vacuum's excuse for missing a spot, written to /output/entry.txt.
// Node, no dependencies. Run: node main.ts
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I did not miss that spot. My lidar logged the crumb as a permanent resident, and evicting it requires thirty days' written notice.";

// The gate: 1-200 UTF-8 characters, not only whitespace, exactly one line.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error(`entry line invalid: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

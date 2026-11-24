// Fortune in a Pot — writes one kind, funny fortune for the houseplant
// on the windowsill to /output/entry.txt.
//
// The fortune is a fixed, deterministic string: no network, no clock,
// no randomness. It is written as UTF-8, a single line, at most 120
// characters, so the gate (1-120 characters, not only whitespace) passes
// and the judge reads exactly this line.
import { mkdirSync, writeFileSync } from "node:fs";

// The fortune itself: a prediction about this plant's own future —
// a new leaf reaching for the morning sun on its windowsill — kind,
// warm, and with one small joke (the pot's windowsill as the sunniest
// address on the street) that a plant lover would smile at.
const FORTUNE =
  "By Sunday a brave new leaf will reach for the sunrise, and your windowsill will be the sunniest address on the street.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE + "\n", "utf8");

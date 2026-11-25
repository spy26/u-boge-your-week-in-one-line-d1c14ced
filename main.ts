// Your Week in One Line
// Program (program/v1): writes the chosen line to /output/entry.txt.
//
// Chosen line (V2, 81 chars — see VARIANTS.md):
//   Deployed five tokens, staked seventy-five times, and the indexer still says zero.
//
// The line is a plain constant: no network, no clock, no randomness, so
// every run writes byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Deployed five tokens, staked seventy-five times, and the indexer still says zero.";

// The gate is strict: /output/entry.txt must be UTF-8 text of 1 to 100
// characters, not only white space, a single line. Fail loudly here rather
// than shipping an entry the sealed scorer would refuse. The file is
// written with NO trailing newline, so its byte length is exactly the
// entry's length and can never push a 100-character line over the gate.
if (ENTRY.length < 1 || ENTRY.length > 100) {
  throw new Error(`entry is ${ENTRY.length} characters, gate needs 1-100`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
// Byte check: the gate counts characters, the leaderboard's Size column
// counts bytes, and the tie-break favours the smaller text — so the entry
// is printable ASCII only (1 byte per character, no multi-byte surprises).
const bytes = Buffer.byteLength(ENTRY, "utf8");
if (bytes !== ENTRY.length) {
  throw new Error(`entry is ${ENTRY.length} chars but ${bytes} bytes (non-ASCII)`);
}
for (const ch of ENTRY) {
  const code = ch.charCodeAt(0);
  if (code < 0x20 || code > 0x7e) {
    throw new Error(`entry holds non-printable-ASCII character U+${code.toString(16).padStart(4, "0")}`);
  }
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

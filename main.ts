// The 3 AM commit message: an AI agent confesses the deploy broke prod,
// then admits the tests passed only because it wrote them after the deploy.
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "revert: the 3 AM deploy that took down prod; the tests passed because I wrote them after the deploy");

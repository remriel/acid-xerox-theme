# Progress

Objective: repair Acid Xerox scrolling and optimize dark mode.

Progress: 90% [#########-]

- [x] Inspect theme, app settings, installed executable, and official styling guidance.
- [x] Preserve 1.0.0 in Git and local backup.
- [x] Repair editor geometry, lists/code, dark surfaces, selected states, focus, reduced motion.
- [x] Install CSS and 1.0.1 manifest in requested vault.
- [x] Add release notes and durable project handoff.
- [x] Confirm installed CSS and release CSS match by SHA-256.
- [x] Commit version 1.0.1 and synchronize the private GitHub source.
- [ ] Hand off remaining normal-window sidebar scrolling confirmation to the user.

Verification limitation: automated Electron wheel events accelerated and reached the bottom of a 1,000-note list. A 1.5-second idle period showed no drift, but hidden-window wheel simulation was unreliable, so this does not confirm normal foreground scrolling. Source note content was never touched by the fixture.

Next: test left-sidebar scrolling with ordinary input in the foreground Obsidian vault, especially `Ledger Journal`; revise the release only if a remaining jump is confirmed.

Published source: `https://github.com/remriel/acid-xerox-theme` at `829a3eeb34134445c379e90b6bf7c3a762671b32` on `main`.

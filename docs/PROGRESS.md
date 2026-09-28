# Progress

Objective: repair Acid Xerox scrolling and optimize dark mode.

Progress: 85% [########--]

- [x] Inspect theme, app settings, installed executable, and official styling guidance.
- [x] Preserve 1.0.0 in Git and local backup.
- [x] Repair editor geometry, lists/code, dark surfaces, selected states, focus, reduced motion.
- [x] Install CSS and 1.0.1 manifest in requested vault.
- [x] Add release notes and durable project handoff.
- [x] Confirm installed CSS and release CSS match by SHA-256.
- [ ] Commit version 1.0.1 and synchronize the private GitHub source.
- [ ] Hand off remaining normal-window sidebar scrolling confirmation to the user.

Verification limitation: automated Electron wheel events accelerated and reached the bottom of a 1,000-note list. A 1.5-second idle period showed no drift, but hidden-window wheel simulation was unreliable, so this does not confirm normal foreground scrolling. Source note content was never touched by the fixture.

Next: review diff and commit; create/push private repository backup; verify published source SHA against installed CSS.

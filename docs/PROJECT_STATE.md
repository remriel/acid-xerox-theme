# Project state

- Installed theme: C:/Users/Gev/OneDrive/Documents/Obsidian Vault/.obsidian/themes/Acid Xerox.
- Editable source and Git history: this directory. Original 1.0.0 committed before repairs.
- User requires dark mode and reports scrolling skipping to the bottom. Running Obsidian 1.13.7 confirmed Acid Xerox and theme-dark; earlier disk appearance snapshot was stale.
- Keep Obsidian virtualized content geometry native. Use Obsidian size/margin variables, preserve file-tree row margins, avoid cm-contentContainer padding, per-line quote padding/borders, viewport-sized heading boxes, and layout transforms.
- Confirmed CSS bugs: custom bullets replaced ordered-list markers; pre code inherited inline boxes; dark index-card used light surfaces with incompatible text/link colors; bright selected controls inherited pale secondary text/icons.
- Scroll wheel automation in a hidden Electron window accelerated from 120px to 8,094px despite zero drift after the wheel stopped. This is not evidence of actual sidebar stability; perform manual scrolling in the user's normal window after restart.

## RESUME HERE

1.0.1 CSS, changelog, manifest, README, and docs are committed as `829a3eeb34134445c379e90b6bf7c3a762671b32` and pushed to private `https://github.com/remriel/acid-xerox-theme`. Installed CSS and manifest hashes match the tracked release files. Do not claim all bugs eliminated: the simulated scroll result is inconclusive. Normal foreground sidebar scrolling still needs confirmation.

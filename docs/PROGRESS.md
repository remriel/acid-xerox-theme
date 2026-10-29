# Progress

Objective: stop folder titles accumulating indentation while preserving the scroll fix.

Progress: **100%** `[####################]`

- [x] Reproduce growing inline padding on folder close/open.
- [x] Trace padding writes to Obsidian virtual-list measurement.
- [x] Isolate the universal reduced-motion 0.01ms transition.
- [x] Change transition-duration to 0s and retain overflow-anchor: none.
- [x] Verify six isolated cycles at a constant 42px; two measured user-vault cycles also held at 42px.
- [x] Install 1.0.5 into the user vault.
- [x] Run all 10 regression tests and git diff --check.
- [x] Confirm automatic GitHub release: https://github.com/remriel/acid-xerox-theme/releases/tag/1.0.5.

No implementation blockers. No vault notes changed. Version 1.0.5 is published with both required assets. No remaining implementation work.

## 1.0.6

Reproduced the white-on-yellow active tab in an isolated Obsidian 1.14.5 vault. Fixed and checked active tab titles and controls in light and dark modes, focused and unfocused, without touching native file-tree geometry. The full regression suite passes.

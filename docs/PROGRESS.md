# Progress

Objective: stop folder titles accumulating indentation while preserving the scroll fix.

Progress: **95%** `[###################.]`

- [x] Reproduce growing inline padding on folder close/open.
- [x] Trace padding writes to Obsidian virtual-list measurement.
- [x] Isolate the universal reduced-motion 0.01ms transition.
- [x] Change transition-duration to 0s and retain overflow-anchor: none.
- [x] Verify six isolated cycles at a constant 42px; two measured user-vault cycles also held at 42px.
- [x] Install 1.0.5 into the user vault.
- [x] Run all 10 regression tests and git diff --check.
- [ ] Confirm automatic GitHub release.

No implementation blockers. No vault notes changed. Next: push and verify the 1.0.5 release, then mark completion.

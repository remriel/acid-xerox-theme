# Progress

Objective: reproduce and fix runaway scrolling in long Obsidian lists with Acid Xerox.

Progress: **100%** toward a verified, published fix. `[####################]`

## Checklist

- [x] Read repository state, CSS, tests, manifest, and prior fix notes; inspect Git status and diff.
- [x] Confirm Obsidian 1.14.4 and Acid Xerox 1.0.3 are installed; identify a large local vault for testing.
- [x] Measure live list scrolling with another theme and Acid Xerox using the same input.
- [x] Identify browser scroll anchoring as the source of the jump and wrong-way movement.
- [x] Add `overflow-anchor: none` only to the virtualized file explorer and protect it with a regression assertion.
- [x] Verify intermediate down/up positions in an isolated 1,000-note vault and the user's large vault.
- [x] Run all repository tests and `git diff --check`.
- [x] Update the installed theme copy, manifest, README, changelog, and project state.
- [x] Review the final diff, commit and push to GitHub, then confirm CI/release status.
- [x] Receive user confirmation that the physical wheel now scrolls correctly.

## Current implementation state

The single-rule fix is in `theme.css` and the source version is 1.0.4. The user's installed copy is also 1.0.4. Commit `318cdc4` was pushed to `main` and tagged `1.0.4`. The public release includes `theme.css` and `manifest.json`.

## Current blocker

None. Windows Computer Use was not used for the fix.

## Tests and verification

- Obsidian 1.14.4, isolated 1,000-note vault without plugins: unpatched Acid Xerox jumped after repeated 120-pixel wheel input; `overflow-anchor: none` restored exact 120-pixel steps and correct reversal. Verified ten additional down/up events and mid-list / near-bottom positions.
- User vault with existing plugins and installed 1.0.4: five 120-pixel down events reached 600 and one up event returned to 480. Forty-pixel down/up nudges at 10,000 and 20,000 returned to their starting positions.
- `node --test tests/theme.test.mjs`: 9 passed, 0 failed. `git diff --check`: passed.
- The user confirmed in chat that the physical wheel issue is fixed.
- GitHub `Validate theme` and `Release theme` workflows completed successfully for `318cdc4`; the public release is https://github.com/remriel/acid-xerox-theme/releases/tag/1.0.4.

## Exact next steps

No further work required for 1.0.4. If a later Obsidian update changes file-explorer virtualization, repeat the controlled down/up wheel test in a long folder before altering row geometry or scroll behavior.

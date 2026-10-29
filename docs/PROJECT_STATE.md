# Project state

- Repository: https://github.com/remriel/acid-xerox-theme
- Current release: 1.0.5, a CSS-only Obsidian theme. Obsidian 1.14.4 was used for live verification. GitHub release: https://github.com/remriel/acid-xerox-theme/releases/tag/1.0.4.
- User issue: long lists jump directly between top and bottom when scrolled; intermediate positions cannot be reached. Prior 1.0.1–1.0.3 CSS mitigations did not establish a live reproduction or verified fix.

## Architecture and constraints

- `theme.css` is the shipped theme; `manifest.json` supplies its version. Keep the version in the CSS header and manifest synchronized.
- `.github/workflows/validate-theme.yml` runs dependency-free checks from `tests/theme.test.mjs` on pushes and pull requests.
- `.github/workflows/release-theme.yml` publishes `manifest.json` and `theme.css` from the manifest version on `main`.
- `README.md` documents manual installation and compatibility; `CHANGELOG.md` records releases.
- File Explorer uses virtualized rows. Do not change their height, margins, padding, line height, transforms, or generated content without live evidence that the change is safe.
- Keep user vault notes untouched. The fix is scoped to `.workspace-leaf-content[data-type="file-explorer"] .nav-files-container`.

## Cause and decision

- The 1.0.2 rules made file titles single line with fixed font weight, left row geometry native, removed a generated prefix, and kept the file explorer scrollbar native.
- Those mitigations did not prevent the jump. A controlled Chrome DevTools Protocol `Input.dispatchMouseEvent` wheel sequence reproduced it under Acid Xerox in both the user's large vault and an isolated 1,000-note vault with no community plugins.
- In the isolated vault, after five downward 120-pixel wheel events the list reached 2,347 pixels instead of 600; an upward event then moved it farther down to 3,033. With the theme stylesheet disabled, the same events moved in 120-pixel steps. Disabling the explorer's existing scroll rule alone did not help.
- Setting `overflow-anchor: none` on the virtualized `.nav-files-container` produced 120, 240, 360, 480, 600 and returned to 480 on upward input. Removing that one property restored the bug. Browser scroll anchoring was adjusting the scroll position while Obsidian recycled rows.
- `theme.css` now carries that one declaration. Keep native wheel handling, scrollbar sizing, and row geometry. Do not reintroduce browser scroll anchoring on this container.

## Verification and relevant files

- The Obsidian CLI's `eval` and `dev:cdp` commands allow DOM metric inspection and renderer wheel input without Windows Computer Use.
- An isolated Obsidian 1.14.4 vault with 1,000 plain notes and no plugins verified the installed 1.0.4 theme: five down steps at 120-pixel intervals reached 600, an upward step returned to 480, ten more down steps reached 1,680, and ten up steps returned to 480. Mid-list and near-bottom 120-pixel down/up probes also returned to their starting positions.
- In the user's vault with its existing plugins, the installed 1.0.4 theme yielded 120, 240, 360, 480, 600 then 480. Small 40-pixel down/up nudges at positions 10,000 and 20,000 returned to their starting positions.
- `tests/theme.test.mjs` protects the `overflow-anchor: none` declaration. All nine dependency-free tests and `git diff --check` pass.
- `manifest.json`, the `theme.css` header, `README.md`, and `CHANGELOG.md` are updated for 1.0.4. The user's installed theme copy also has 1.0.4; a backup of the prior copy is outside the repository.
- The user confirmed that physical wheel scrolling works after the fix. Commit `318cdc4` is on `main` and tagged `1.0.4`; both validation and release workflows passed, and the release includes both required assets.
- Windows Computer Use failed to capture the app and was abandoned. A previous attempt to disable several live stylesheet rules at once coincided with Obsidian closing; isolate future experiments in a test vault and restore modified CSS rules after each test.

## 1.0.5 indentation fix

The reduced-motion universal rule used transition-duration: 0.01ms. This introduced a transition on native virtual-list padding resets. Obsidian measured the previous padding and accumulated indentation on each folder reopen. Changed the duration to 0s; retained overflow-anchor: none. An isolated six-cycle test held child padding at 42px throughout, and two measured cycles in the user vault also held at 42px. Later user-vault samples were unrendered and do not count as verification. All ten static tests pass. Installed 1.0.5 into the user vault.

## RESUME HERE

The 1.0.5 indentation fix is implemented, tested, and installed. Preserve both immediate reduced-motion transitions and disabled file-tree scroll anchoring. Version 1.0.5 is published: https://github.com/remriel/acid-xerox-theme/releases/tag/1.0.5. No unfinished work remains.

## 1.0.6 contrast repair

The focused document tab in Obsidian 1.14.5 rendered the light title over the yellow active background because an Obsidian selector outranked the existing theme rule. Scoped color overrides to the root document area with enough specificity for both focused and unfocused windows; sidebar tabs retain their own colors. Tested computed title and close-button colors against yellow in dark mode and cyan in light mode, with no low-contrast visible text found in the inspected test view. Preserved virtual-list fixes. Regression test covers both selectors and palette contrast.

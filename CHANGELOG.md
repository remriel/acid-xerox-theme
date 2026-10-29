# Changelog

## 1.0.6 - 2026-10-28

- Keep active document tab titles and controls dark against the bright yellow or cyan background, including when the window is focused.
- Scope active-tab color variables to the document area so selected sidebar tabs retain their own theme colors.
- Preserve native virtualized file-tree geometry, immediate reduced-motion transitions, and the scroll-anchoring fix.

## 1.0.5 - 2026-10-16

- Make reduced-motion transitions truly immediate. A global 0.01ms transition delayed virtualized row padding resets, causing indentation to grow every time a folder was reopened.
- Preserve the 1.0.4 scroll-anchoring fix.

## 1.0.4 - 2026-10-16

- Disable browser scroll anchoring inside Obsidian's virtualized file explorer. Recycled rows previously caused runaway jumps and could move the list down after an upward wheel event.
- Verified the change with repeated wheel input in an isolated Obsidian 1.14.4 vault containing 1,000 notes; the same input moved in 120-pixel steps in both directions.

## 1.0.3 - 2026-10-13

- Resolve Obsidian theme CSS lint compatibility warnings for `text-decoration-color`, `text-decoration-line`, and `text-decoration-thickness`; use supported underline styling without changing line geometry.
- Remove partially supported `box-decoration-break` and `-webkit-box-decoration-break` from highlights.
- Add regression coverage for the flagged declarations while preserving the 1.0.2 large-folder scrolling fixes.


## 1.0.2 - 2026-10-13

- Stabilize file explorer rendering with documented navigation variables instead of changing virtualized row geometry.
- Keep long folder/file titles single-line and their font weight constant across hover and selection.
- Replace generated folder prefix text with a paint-only accent that cannot alter row measurements.
- Restore native scrollbar sizing in large file trees; scope styled scrollbars to note panes and dialogs.
- Prevent smooth file-explorer scrolling and wheel-scroll chaining into surrounding panes.
- Restore native global tight line-height, and add dependency-free regression checks.
- Avoid padding CodeMirror inline highlights, which can disturb virtual line measurements.
- Bound embedded images, videos and iframes to the pane width without growing past their border box.

## 1.0.1 - 2026-09-28

- Preserve Obsidian's native file-explorer row size and spacing so virtualized sidebar rows stay in place while scrolling.
- Keep Live Preview text, headings, and quotes inside CodeMirror's native line geometry to reduce scroll-height mismatches.
- Use normal-sized headings in notes and retain the large poster treatment only in reading view.
- Keep numbered-list markers and remove inline-code styling from fenced code blocks.
- Improve dark mode contrast for headings, status bar, index cards, code, links, dividers, selected rows, keyboard focus, and reduced motion.

## 1.0.0 - 2026-09-27

- Initial public release.
- Added coordinated light and dark palettes.
- Added brutalist workspace chrome, navigation, editor, callouts, tables, forms, modals, Canvas, and mobile treatments.
- Added `poster` and `index-card` utility classes.

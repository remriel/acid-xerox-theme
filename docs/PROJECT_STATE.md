# Project state

- Repository: https://github.com/remriel/acid-xerox-theme
- Current source: version 1.0.2 (2026-10-13), a CSS-only Obsidian theme.
- User issue: fast runaway scrolling to bottom within a large file explorer root or folder.
- Earlier 1.0.1 changes reduced layout overrides but did not confirm or eliminate the user's remaining report.

## Mitigations in 1.0.2

- Use supported Obsidian navigation variables for consistent single-line row typography and hover/active colors.
- Do not change explorer row margins, paddings, heights, line-height, transforms, or generated content.
- Keep file explorer scrollbar native; decorate scrollbars only in reading view, editor and dialogs.
- Remove the global tight-line-height override; prevent smooth scrolling and scroll chaining.
- Keep the fluorescent visual identity using paint-only box shadows and variable-driven colors.
- Protect key invariants using `node --test tests/theme.test.mjs` in continuous integration.

## Remaining verification

Native Obsidian foreground mouse-wheel/trackpad scrolling cannot be reproduced in this connector session. A static CSS audit and CI checks do not prove the app's scrolling behavior has been repaired. Recheck a large vault on the current Obsidian version. If the jumping also occurs with the Default theme and plugins disabled, isolate it as an Obsidian virtualized-file-tree or device scroll-input issue.

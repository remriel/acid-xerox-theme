# Acid Xerox

![Acid Xerox preview](./images/screenshot.png)

**[Get the theme](https://github.com/remriel/acid-xerox-theme/blob/main/theme.css)** · [Installation](#install-manually) · [View design details](#design-language)

**Acid Xerox** is a bold, colorful neo-brutalist theme for Obsidian, built from the visual language of 1990s zines, photocopied flyers, record sleeves, rave graphics, early desktop publishing, and chunky interface chrome.

It is loud on purpose, but it still has to function as a note-taking environment. The theme uses hard borders, offset shadows, fluorescent accents, condensed display typography, highlighted navigation, visible hierarchy, and a paper-grid writing surface while keeping body text readable.

## Design language

- Electric yellow, magenta, cyan, acid green, ultramarine, black, and warm paper.
- Square corners everywhere.
- Thick rules and visible structure instead of soft cards.
- Offset print-style shadows rather than blur.
- Oversized poster headings.
- Monospace micro-labels and metadata.
- Strong hover / active states for navigation.
- Light and dark themes with the same visual DNA.
- No external fonts, images, or web assets.

## Install manually

1. Download `theme.css` and `manifest.json`.
2. Create a folder named `Acid Xerox` inside your vault at `.obsidian/themes/`.
3. Put both files in that folder.
4. Open **Settings → Appearance → Themes** and select **Acid Xerox**.

## Optional CSS classes

Add these in a note's frontmatter under `cssclasses`:

```yaml
cssclasses:
  - poster
```

`poster` makes the H1 treatment deliberately louder, with stacked fluorescent offset shadows.

```yaml
cssclasses:
  - index-card
```

`index-card` turns the note canvas into a bordered paper card with a hard magenta shadow.

## Publishing to the Obsidian Community directory

For the first release:

1. Push this repository to GitHub.
2. Replace `images/screenshot.png` with a fresh 512×288 screenshot taken from the current theme if you have changed the design.
3. Create a GitHub release tagged `1.0.0`.
4. Attach `manifest.json` and `theme.css` to the release.
5. Submit the repository through the Obsidian Community directory.

For later releases, bump the semantic version in `manifest.json`, tag the same version on GitHub, and attach the updated `manifest.json` and `theme.css` to the release.

## Theme philosophy

Most productivity software whispers. Acid Xerox uses a megaphone. The interface should feel authored rather than anesthetized: visible edges, decisive hierarchy, color that carries meaning, and enough friction to give the workspace a physical presence.

The chaos is controlled. Body copy stays calm. Navigation, headings, metadata, state changes, callouts, and controls carry the visual voltage.

## Compatibility

- Designed for modern desktop and mobile Obsidian.
- Minimum app version declared in `manifest.json`: `1.5.0`.
- No external assets.
- No `!important` rules.
- No `:has()` selectors.
- Version 1.0.7 removes the yellow link hover background to keep link text readable.
- Version 1.0.6 improves active document tab contrast in light and dark modes and retains the 1.0.4–1.0.5 file-tree fixes.
- Version 1.0.4 disables browser scroll anchoring in the virtualized file tree to prevent runaway or wrong-way scrolling.

## Large-folder scrolling

Acid Xerox does not install scroll handlers or change wheel speed. Since 1.0.4, the file explorer disables browser scroll anchoring so that the browser does not shift the scroll position when Obsidian recycles rows in a long folder. File titles remain single-line, use fixed font weight in all states, and keep native sidebar scrollbars. Reload Obsidian after upgrading.

## License

MIT. See [LICENSE](./LICENSE).

## Other Obsidian projects

- [Untitled Auto Title](https://github.com/remriel/obsidian-untitled-auto-title): automatically rename untitled Markdown notes with Groq or local content extraction.
- [Automatic Mood History](https://github.com/remriel/automatic-mood-history): local-first mood timelines for journal notes.

import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const css = readFileSync(new URL('../theme.css', import.meta.url), 'utf8');
const manifest = JSON.parse(readFileSync(new URL('../manifest.json', import.meta.url), 'utf8'));
const stripped = css.replace(/\/\*[\s\S]*?\*\//g, '');
const explorer = css.split('/* ---------- Sidebars and navigation ---------- */')[1]?.split('/* ---------- Editor canvas ---------- */')[0];

test('reduced motion does not delay virtual row padding resets', () => {
  assert.doesNotMatch(stripped, /transition-duration:\s*0\.01ms/);
  assert.match(stripped, /@media\s*\(prefers-reduced-motion:\s*reduce\)\s*\{\s*\*,[\s\S]*?transition-duration:\s*0s\s*;/);
});

test('theme version matches manifest', () => {
  assert.equal(css.match(/Acid Xerox v(\d+\.\d+\.\d+)/)?.[1], manifest.version);
});
test('focused and unfocused active document tabs use readable ink on bright backgrounds', () => {
  const rules = stripped.split('}').find(rule => rule.includes('body.is-focused .workspace-split.mod-root') && rule.includes('.workspace-tab-header-inner-title'));
  assert.ok(rules, 'focused root-tab selector must outrank Obsidian’s focused title rule');
  for (const part of ['inner-title', 'inner-icon', 'inner-close-button']) {
    assert.ok(rules.includes(`.workspace-split.mod-root .workspace-tab-header.is-active .workspace-tab-header-${part}`));
    assert.ok(rules.includes(`body.is-focused .workspace-split.mod-root .workspace-tab-header-container .workspace-tab-header.is-active .workspace-tab-header-${part}`));
  }
  assert.match(rules, /color:\s*var\(--ax-black\)/);
  const rootOnly = stripped.match(/\.theme-dark\s+\.workspace-split\.mod-root\s+\.workspace-tab-header\.is-active\s*\{([^}]*)\}/g) || [];
  assert.ok(rootOnly.some(rule => rule.includes('--tab-text-color: #050505')));
  assert.doesNotMatch(stripped, /\.theme-dark\s+\.workspace-tab-header\.is-active\s*\{[^}]*--tab-text-color/);
  const luminance = (hex) => {
    const c = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255).map(x => x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4);
    return c[0] * 0.2126 + c[1] * 0.7152 + c[2] * 0.0722;
  };
  for (const [fg, bg] of [['#050505', '#fff200'], ['#101010', '#00e7ff']]) {
    assert.ok((luminance(bg) + 0.05) / (luminance(fg) + 0.05) >= 4.5);
  }
});
test('CSS braces are balanced', () => {
  let depth = 0;
  for (const char of stripped) {
    if (char === '{') depth++;
    else if (char === '}') depth--;
    assert.ok(depth >= 0, 'unexpected closing brace');
  }
  assert.equal(depth, 0);
});
test('virtual file rows keep stable geometry', () => {
  assert.ok(explorer, 'missing explorer styles');
  assert.match(explorer, /--nav-item-white-space:\s*nowrap\s*;/);
  for (const property of ['weight', 'weight-hover', 'weight-active']) {
    assert.ok(explorer.includes('--nav-item-' + property + ': 700;'));
  }
  assert.doesNotMatch(explorer, /(?:^|[;{])\s*(?:height|line-height|padding|margin|transform|font-size|font-weight|display|position|overflow-y)\s*:/m);
  assert.doesNotMatch(stripped, /\.nav-folder-title-content\s*::before/);
});
test('virtual file explorer uses native scrollbars and immediate scrolling', () => {
  assert.match(explorer, /\.nav-files-container\s*\{[^}]*scroll-behavior:\s*auto\s*;/);
  assert.match(explorer, /\.nav-files-container\s*\{[^}]*overflow-anchor:\s*none\s*;/);
  assert.doesNotMatch(stripped, /scroll-behavior\s*:\s*smooth/);
  assert.doesNotMatch(stripped, /(^|,)\s*::-webkit-scrollbar(?:\b|[-:])/m);
  assert.doesNotMatch(stripped, /\.nav-files-container\s*::-webkit-scrollbar/);
});
test('no editor virtualized row geometry overrides', () => {
  assert.doesNotMatch(stripped, /\.cm-contentContainer\s*\{/);
  assert.doesNotMatch(stripped, /\.cm-line\s*\{[^}]*(?:padding|height|transform)\s*:/);
});

test('highlight decorations do not enlarge CodeMirror line boxes', () => {
  assert.match(css, /\.cm-highlight\s*\{\s*padding:\s*0\s*;\s*\}/);
});
test('embedded media respect the available document width', () => {
  assert.match(css, /\.markdown-rendered iframe\s*\{[^}]*max-width:\s*100%\s*;/);
});

test('Obsidian-compatible underlines avoid partially supported decoration features', () => {
  assert.doesNotMatch(stripped, /text-decoration-(?:color|line|thickness)\s*:/);
  assert.match(stripped, /text-decoration:\s*underline\s*;/);
});
test('highlight styling avoids partially supported box-decoration-break', () => {
  assert.doesNotMatch(stripped, /(?:-webkit-)?box-decoration-break\s*:/);
});

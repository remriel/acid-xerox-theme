import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const css = readFileSync(new URL('../theme.css', import.meta.url), 'utf8');
const manifest = JSON.parse(readFileSync(new URL('../manifest.json', import.meta.url), 'utf8'));
const stripped = css.replace(/\/\*[\s\S]*?\*\//g, '');
const explorer = css.split('/* ---------- Sidebars and navigation ---------- */')[1]?.split('/* ---------- Editor canvas ---------- */')[0];

test('theme version matches manifest', () => {
  assert.equal(css.match(/Acid Xerox v(\d+\.\d+\.\d+)/)?.[1], manifest.version);
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

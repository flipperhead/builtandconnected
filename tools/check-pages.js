#!/usr/bin/env node
/*
 * check-pages.js — render check for the Built & Connected site.
 *
 * Opens every page in a headless browser and reports the failures that
 * reading the HTML will never catch:
 *
 *   1. Images that didn't load at all.
 *   2. Gallery sections that have lost their CSS and are rendering as
 *      unstyled full-width images.
 *   3. Any single image taller than the viewport.
 *   4. Internal links pointing at pages that don't exist.
 *
 * Check 2 exists because a CSS block was once deleted during an unrelated
 * rewrite. The markup stayed valid, so nothing flagged it, and a finished
 * page rendered as a column of enormous images for three weeks.
 *
 * Run from the repo root:   node tools/check-pages.js
 * One-time setup:           npm install playwright && npx playwright install chromium
 */

const path = require('path');
const fs = require('fs');

const ROOT = path.resolve(__dirname, '..');
const VIEWPORT = { width: 1280, height: 900 };

// Classes that must resolve to a real layout. If one of these appears in the
// markup but computes to a plain block, its stylesheet rules have gone.
const MUST_BE_STYLED = [
  { selector: '.ba',     property: 'display', expected: 'grid' },
  { selector: '.shots',  property: 'display', expected: 'grid' },
  { selector: '.feature', property: 'display', expected: 'grid' },
  { selector: '.doors-grid', property: 'display', expected: 'grid' },
];

(async () => {
  let chromium;
  try {
    ({ chromium } = require('playwright'));
  } catch {
    console.error('Playwright is not installed.\n  npm install playwright && npx playwright install chromium');
    process.exit(2);
  }

  const pages = fs.readdirSync(ROOT).filter(f => f.endsWith('.html')).sort();
  if (!pages.length) {
    console.error('No .html files found. Run this from the repo root.');
    process.exit(2);
  }

  const browser = await chromium.launch();
  let problems = 0;

  for (const file of pages) {
    const context = await browser.newContext({ viewportSize: VIEWPORT });
    const page = await context.newPage();
    const found = [];

    await page.goto('file://' + path.join(ROOT, file));

    // Force every image to load before measuring. Scrolling to trigger
    // loading="lazy" is unreliable headless — images below the fold report
    // as broken when they are perfectly fine. Switching them to eager and
    // waiting on each one answers the question we actually care about:
    // can this file be fetched and decoded at all?
    await page.evaluate(() => {
      document.querySelectorAll('img[loading="lazy"]').forEach(i => { i.loading = 'eager'; });
    });
    await page.evaluate(() => Promise.all([...document.images].map(img =>
      img.complete ? null : new Promise(res => { img.onload = img.onerror = res; }))));
    await page.waitForTimeout(300);

    // 1. Images that failed to load.
    const broken = await page.$$eval('img', imgs =>
      imgs.filter(i => i.naturalWidth === 0).map(i => i.getAttribute('src')));
    broken.forEach(src => found.push(`image did not load: ${src}`));

    // 2. Sections whose styling has gone missing.
    for (const { selector, property, expected } of MUST_BE_STYLED) {
      const state = await page.$$eval(selector, (els, prop) =>
        els.length ? getComputedStyle(els[0])[prop] : null, property);
      if (state !== null && state !== expected) {
        found.push(`${selector} computes ${property}:${state}, expected ${expected} — its CSS rules are missing`);
      }
    }

    // 3. Images taller than the viewport.
    const tall = await page.$$eval('img', (imgs, vh) =>
      imgs.filter(i => i.getBoundingClientRect().height > vh)
          .map(i => `${i.getAttribute('src')} (${Math.round(i.getBoundingClientRect().height)}px)`),
      VIEWPORT.height);
    tall.forEach(t => found.push(`image taller than the viewport: ${t}`));

    // 4. Internal links with no page behind them.
    const hrefs = await page.$$eval('a[href^="/"]', as => [...new Set(as.map(a => a.getAttribute('href')))]);
    for (const href of hrefs) {
      const slug = href.replace(/^\//, '') || 'index';
      if (!fs.existsSync(path.join(ROOT, slug + '.html')) && !fs.existsSync(path.join(ROOT, slug))) {
        found.push(`link goes nowhere: ${href}`);
      }
    }

    const height = await page.evaluate(() => document.body.scrollHeight);

    if (found.length) {
      problems += found.length;
      console.log(`\n${file}  (${height}px tall)`);
      found.forEach(f => console.log(`   ✗ ${f}`));
    } else {
      console.log(`${file}  (${height}px tall)  ok`);
    }

    await context.close();
  }

  await browser.close();
  console.log(problems ? `\n${problems} problem(s) found.` : '\nAll pages clean.');
  process.exit(problems ? 1 : 0);
})();

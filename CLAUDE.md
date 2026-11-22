# Built & Connected — working notes for Claude

Static website for Built & Connected, LLC (Estes Park, CO). Hand-written HTML
and CSS. No framework, no build step, no dependencies. Deployed to Cloudflare
Workers at builtandconnected.com.

**Read `README.md` before writing any copy.** It holds the writing rules and
the business decisions behind them. They were argued out over many rounds and
are not suggestions.

---

## Before you commit

Run the render check:

```
node tools/check-pages.js
```

It opens every page in a headless browser and reports broken images, images
rendering taller than the viewport, and gallery sections that have lost their
styling. One past bug — a CSS block put in a `git stash` during a branch
switch and never popped — left a finished page rendering as unstyled
full-width images for three weeks, because nobody opened it in a browser.
Reading the HTML will not catch that class of failure.

First run needs the browser once:

```
npm install playwright && npx playwright install chromium
```

---

## Load-bearing — do not delete when rewriting

These are easy to drop in a wholesale rewrite and the damage is not obvious
in the source.

- **The `PROJECT GALLERIES` block at the end of `style.css`** — all the
  `.project`, `.ba`, `.shot`, `.shots`, `.feature` rules. Without it,
  `carpentry.html` renders as full-width stacked images.
- **The three blues in `:root`.** `--blue-print` (#0000EA) is print-only and
  measures 1.56:1 on the dark background. Never put it on screen.
- **The `.tex-*` texture variables** — the barn and wood-grain panels on the
  technology page depend on them.
- **The writing rules in `README.md`.** Amend them; don't replace them. A
  wholesale rewrite once silently reversed a decision that had already been
  settled — see the "Trade terms are not jargon" bullet, which had to be
  put back.

---

## Git

- **Don't leave work in a `git stash`.** A stash is invisible in
  `git status`, invisible in the working tree, and invisible to every other
  session. The gallery CSS above sat in one for three weeks while the
  carpentry page rendered broken. If you need to switch branches with work
  in progress, commit it to a branch instead — an unfinished commit is
  recoverable and legible, a forgotten stash is neither.
- **Claude working branches** (`claude/…`) should be merged to `main` and
  deleted once their work lands. One sat unmerged for ten days holding the
  only copy of the technology page rewrite.
- **Commit unfinished work.** Untracked files are invisible to any session
  sweeping the repo for outstanding items.

---

## Files

```
index.html          Homepage
technology.html     Technology services + the Technology Checkup
carpentry.html      Carpentry work, organised by job
rental-owners.html  Vacation rental owners — the cross-trade page
about.html          Who Jason is, and why a carpenter is doing this
style.css           Shared stylesheet — every page links to it
images/             Photos, textures, logo
tools/              Repo scripts (render check)
```

Edit `style.css` once and all pages follow. Don't put styles in individual
pages.

---

## Conventions

- **Image filenames are descriptive, never client names.** `deck-01.jpg`,
  `bunks-before-01.jpg`. Visitors don't know who the client was, and it keeps
  client names out of URLs. (`standerferdeck.jpg` predates this rule.)
- **Images are web-sized before they go in `images/`** — 1400–1900px on the
  long edge, under 400KB, EXIF rotation baked in rather than left as a flag.
  Browsers honour the flag and most desktop tools ignore it, so an unbaked
  photo looks right locally and sideways once deployed.
- **Links are written clean** (`/technology`, not `/technology.html`) because
  Cloudflare serves them that way. They won't resolve when opening files
  locally by double-clicking. Use a local server.
- **Cloudflare is case-sensitive even though Windows isn't.** Match filename
  case exactly.
- **Line endings are LF**, enforced by `.gitattributes`.

---

## Deploying

Manual at present:

1. Cloudflare dashboard → Workers & Pages → **builtandconnected** → **New deployment**
2. Drag in the folder (or the changed files)
3. Deploy

Git-triggered deploys are on the to-do list, not set up.

---

## Working with Jason

- He reacts to drafts rather than writing from scratch. Produce something to
  argue with.
- He catches register problems reliably. If he says a line is off, he's right;
  work out why rather than defending it.
- He edits copy directly in VS Code once changes are scoped.
- Give direct recommendations, not open-ended lists of options.
- Commit unfinished work rather than leaving it untracked. A page sat
  untracked for three weeks and a later session, sweeping the repo for
  outstanding items, had no way to see it existed.

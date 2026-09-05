# Built &amp; Connected

Website for Built &amp; Connected, LLC — home technology and custom carpentry, Estes Park, Colorado.

Hand-built static HTML and CSS. No framework, no build step, no dependencies.
Deployed to Cloudflare Workers (project: `builtandconnected`) at
[builtandconnected.com](https://builtandconnected.com).

---

## Files

```
index.html          Homepage
technology.html     Technology services + the Technology Checkup
carpentry.html      Carpentry work and gallery
rental-owners.html  Vacation rental owners — the cross-trade page
about.html          Who Jason is, and why a carpenter is doing this
style.css           Shared stylesheet — every page links to it
images/             Photos and logo
```

Edit `style.css` once and all pages follow. Don't put styles in individual pages.

---

## Deploying

Currently manual:

1. Cloudflare dashboard → Workers &amp; Pages → **builtandconnected** → **New deployment**
2. Drag in the folder (or the changed files)
3. Deploy — live in seconds

Automatic Git-triggered deploys are on the list but not set up yet.

**Note:** Cloudflare serves clean URLs, so links are written as `/technology`,
not `/technology.html`. Those links won't resolve when opening files locally
by double-clicking. That's expected.

---

## Brand

### Colour

One blue, rendered three ways for three backgrounds:

| Variable | Hex | Use |
|---|---|---|
| `--blue-print` | `#0000EA` | The brand blue. Business cards, print, anything on white. |
| `--blue` | `#6B8AFF` | Screen accent on dark backgrounds. 4.77:1 against `--bark`. |
| `--blue-btn` | `#3A50D6` | Button fill only. White text sits at 6.4:1. |

**Do not use `#0000EA` on the dark background.** It measures 1.56:1, which is
unreadable — well below the 4.5:1 minimum. This matters more than usual because
a large share of the audience is over 65.

Other colours: `--bark` `#2C2620` (the logo badge background), `--brass`
`#C49A63` (carpentry accent), `--paper` `#EFE9E1` (text).

### Type

- **Archivo** — headings, labels, buttons
- **Public Sans** — body text
- **XB Niloofar** — the logo only. Not a web font; it appears as an image.

### Logo

Three exports, all from the same Canva design:

- `logo-web.png` — light blue wordmark, white subtitle. This site.
- `logo-dark.png` — print blue wordmark, white subtitle. Dark backgrounds in print.
- `logo-light.png` — print blue wordmark, black subtitle. White backgrounds.

The homepage shows the wordmark in the hero and omits it from the nav, so the
name doesn't appear twice. Interior pages carry it in the nav.

### Background artwork

Inline SVG in each page header. Lines begin on the left as wood grain and
resolve on the right into circuit traces with terminal nodes. The gradient
shifts from brown to blue at roughly the same point the curves square off.
Three paths carry a slow light pulse — only the ones that become traces.

It's the two trades in one image. Keep it subtle; it sits behind text.

---

## Writing rules

Learned the hard way over several rounds of edits.

- **Plain declarative language.** No "crafting solutions," no "peace of mind,"
  no stacked adjectives.
- **Never the word "secure."** It reads as alarm systems. Use "protection" or
  "resilient."
- **Describe problems in the customer's words**, not service categories.
  "The computer is slow" beats "Endpoint Support."
- **No self-praise.** Don't say the work is careful; show it and let the reader
  conclude.
- **No implied dig at competitors.** Say what's true about this business, not
  what's wrong with theirs.
- **Say what isn't offered.** The "What I don't do" sections are deliberate and
  do real work.

---

## Business decisions reflected in the copy

- **Not an MSP.** Project and assessment work, no monthly contracts, no
  overnight monitoring. This is a liability boundary, not just positioning:
  ongoing managed services carry duty-of-care exposure a solo operator
  shouldn't take on.
- **One published price.** The Technology Checkup at $295 for homes. Nothing
  else on the site carries a number.
- **No hourly rates published.** Carpentry is bid, not billed hourly, and
  publishing a tech rate invites comparison against local shops charging
  $100–$180. Two visible rates would also invite unhelpful conclusions about
  which trade matters more.
- **The two trades are one business.** The differentiator is being the person
  who can set up the network *and* run the cable through the wall. Estes Park
  has roughly ten computer repair options; it has one that also builds decks.
- **Vulnerability scanning is deliberately absent.** It needs a signed
  authorisation form reviewed by an attorney and E&amp;O with cyber liability
  in place first. Add it later as a named add-on.

---

## Still to do

- [ ] Carpentry page and photo gallery
- [ ] Compress images — phone photos run 3–8 MB; web wants 150–400 KB
- [ ] Technology photo for the third homepage card
- [ ] Real testimonials — the placeholder section should be deleted until
      there are at least two. A technology one is worth more than a
      carpentry one.
- [ ] Deploy the full site over the holding page
- [ ] Git-triggered Cloudflare deploys
- [ ] Security+ badge on the About page — pull the official badge from
      CompTIA/Credly rather than a logo found online
- [ ] AI-scam content folded into the phishing session (voice cloning,
      convincing phishing text)

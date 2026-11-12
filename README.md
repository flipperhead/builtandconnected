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

Replaces the earlier list. The reader is a homeowner, rental owner, or small
business owner, often reading on a phone. They're smart and busy. They want to
know what I do, whether I can help, and how to reach me.

### Say it clearly

- **Lead with what I do.** Every page headline names the service in words a
  customer would type into Google. "Computer help and carpentry in Estes
  Park," not a slogan.
- **Write full sentences, one idea each.** Keep them to about 20 words. No
  fragments or taglines in the body text ("Framing to finish," "Done once,
  done properly").
- **Keep headings and labels plain.** A heading says what the section is about.
  Skip the small slogan above each heading unless it's a simple label like
  "Repairs" or "Setup."
- **Describe problems in the customer's words.** "The computer is slow" beats
  "Endpoint Support." Keep this one; it works.
- **Name tech things by what they do.** Use these swaps:
  - firmware → the router's built-in software
  - default credentials → the password it came with
  - second-factor / MFA → two-step sign-in
  - access point → a second Wi-Fi unit
  - managed service provider → an IT company on a monthly contract
  - network separation → keeping guests off your own network
  - hardening → tightening the settings
- **No marketing filler.** No "crafting solutions," no "peace of mind," no
  stacked adjectives.

### Respect the reader

- **Assume the reader is smart and busy, not behind.** Don't build sentences
  around what "most people" or "far fewer people" get wrong. Avoid "actually"
  as a nudge ("backups that have actually been tested").
- **Say what I'll do, not what others fail to do.** "I restore a file in front
  of you so you know the backup works," not "Plenty of people have a backup.
  Far fewer have watched a file come back out of it."
- **No jokes or edges at anyone's expense:** not other companies, not the
  reader, not guests. No "a firm down in Loveland," no "anyone who does is
  guessing."
- **Don't scare people into calling.** One short, real example is enough.
  Lead with what I help people keep: their accounts, their photos, their
  business running.

### Let the work speak

- **Be honest; don't announce it.** Drop "I'll tell you plainly," "I'll be
  straight with you," and "I'll tell you honestly." Show it with a specific
  promise instead, like a price before the work starts.
- **No self-praise.** Don't say the work is careful; show it with specifics and
  photos.
- **Say what I don't offer, once, briefly.** One short list per page, three to
  five lines, near the bottom. No story and no comparison to anyone else. End
  it with "If you need one of these, I'll point you to someone who does."

### Words

- **"Secure" is fine for accounts and email** ("secure your email account").
  Avoid it where it sounds like alarm systems ("security system," "home
  security").

### Before publishing

- **Read it aloud.** If I'd have to stop and explain a line, rewrite it.
- **Read it on a phone.** If a paragraph fills the screen, split it or cut it.
  Many readers are older, so keep text easy to read without zooming.
- **Check the headline test:** could a stranger say what I do after five
  seconds on the page?

---

## Business decisions reflected in the copy

- **Not an MSP.** Project and assessment work, no monthly contracts, no
  overnight monitoring. This is a liability boundary, not just positioning:
  ongoing managed services carry duty-of-care exposure a solo operator
  shouldn't take on.
- **One published price.** The Technology Checkup at $295 for homes. Nothing
  else on the site carries a number.
- **Carpentry is time and materials, not fixed-bid.** A detailed estimate goes
  out before work starts — the work broken out, materials listed, expected
  hours. Materials are invoiced at cost with no markup; the hourly rate is set
  to absorb what a markup would have covered, which keeps the books and the tax
  side simple. Receipts are scanned and handed over with the final bill, or on
  request during the job — that is what turns "no markup" from an unverifiable
  promise into something the client can check, so it belongs on the page
  alongside the claim rather than being discovered later. The *model* belongs on the site because a client expecting a
  fixed price and receiving a T&M invoice is a dispute waiting to happen. The
  *reasoning* about taxes does not — that's internal.
- **No rate published anywhere.** Not for carpentry, not for technology.
  Publishing a tech rate invites comparison against local shops charging
  $100–$180. Two visible rates would also invite unhelpful conclusions about
  which trade matters more.
- **Don't sell "no markup" as a saving.** It isn't one — the rate absorbs it.
  Frame it as where the money is: materials at cost, time is what's charged for.
  A client who works out the arithmetic on the other framing feels handled.
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

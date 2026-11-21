# DEV4 Farms — dev4farms.com

Static marketing website for DEV4 Farms, an exotic bird farm in Chisamba, Central Province, Zambia.
Plain HTML/CSS/JS — no build step, no dependencies.

## Preview / verify

- Open `index.html` directly in a browser, or serve the folder:
  - `python -m http.server 8080` (then visit http://localhost:8080)
  - or `npx serve .`
- Verify: all 4 pages load, mobile menu works, contact form opens WhatsApp.

## Structure

- `index.html` — home (hero, highlights, featured birds, about teaser, CTA)
- `birds.html` — full catalog + how-to-order steps
- `about.html` — story, values, visit CTA
- `contact.html` — contact info cards + enquiry form (submits via WhatsApp)
- `css/style.css` — all styles (design tokens in `:root`)
- `js/main.js` — mobile nav, scroll reveal, header shadow, WhatsApp form submit
- `favicon.svg` — peacock-eye brand mark

Bird artwork is inline SVG illustrations (no image files). Replace with real
photos of the farm's birds when available — swap the `<svg>` inside each
`.bird-art` / `.float-card .fc-art` / `.art-panel` for an `<img>`.

## Business facts

- Name: DEV4 Farms (site: dev4farms.com)
- Location: Chisamba, Central Province, Zambia
- Phone (as given by owner): 0575943484
- WhatsApp number used in links: 260575943484 (international format, UNVERIFIED — owner should confirm)
- Email: info@dev4farms.com (placeholder)
- Facebook link: placeholder `href="#"` — owner to provide page URL
- Birds: peacocks, small ostriches (chicks), Sebastopol geese, Pekin ducks, Chinese geese, silkie chickens, plus seasonal varieties

## Updating the WhatsApp number

Change `WHATSAPP_NUMBER` in `js/main.js` AND every `wa.me/...` link in the 4
HTML pages (search for `260575943484`).

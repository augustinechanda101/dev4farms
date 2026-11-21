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

## Images

Real photos live in `images/` (CC-licensed, found via Openverse). Replace with
the farm's own photos when available — keep the same filenames. Card art uses
`<img>` with `object-fit: cover`; gradient classes (`.art-*`) remain as
loading placeholders behind the images.

| File | Bird | Author, license |
|---|---|---|
| logo.jpg | Official logo — "The Kings of Exotic" emblem (owner-supplied) | © DEV4 Farms |
| hero-ostrich.jpg | Hero background — male ostrich | andrew_allen, CC BY (iNaturalist photo 55506762) |
| peacock.jpg | Indian Blue peafowl display | Tony Fischer, CC BY 2.0 — flickr.com/photo/3318039521 |
| ostrich-chicks.jpg | Ostrich chicks in pen | kashifaziz, CC BY 2.0 — flickr.com/photo/6776203911 |
| sebastopol-goose.jpg | Sebastopol goose | Dave Bezaire, CC BY-SA 2.0 — flickr.com/photo/53661038267 |
| pekin-duck.jpg | Pekin duck | SidPix, CC BY 2.0 — flickr.com/photo/4710744467 |
| chinese-goose.jpg | Chinese goose | OakleyOriginals, CC BY 2.0 — flickr.com/photo/8362565648 |
| silkie-chicken.jpg | Silkie chicken | sandyseek, CC BY 2.0 — flickr.com/photo/2706965374 |
| guineafowl.jpg | Helmeted guineafowl | martie1swart, CC BY 2.0 — flickr.com/photo/6297479779 |

Footer carries a general credit line; per-image details are in this table.

## Business facts

- Name: DEV4 Farms (site: dev4farms.com)
- Location: Chikonkomene, Chisamba, Central Province, Zambia
- Phone: 0575943484 local / +260 57 594 3484 — tel: links use international format
- WhatsApp: 260575943484 — confirmed by owner
- Email: info@dev4farms.com (placeholder)
- Facebook: https://www.facebook.com/share/1CGb4XoiZv/?mibextid=wwXIfr (wired into footer socials + contact page)
- Birds: peacocks, small ostriches (chicks), Sebastopol geese, Pekin ducks, Chinese geese, silkie chickens, plus seasonal varieties

## Updating the WhatsApp number

Change `WHATSAPP_NUMBER` in `js/main.js` AND every `wa.me/...` link in the 4
HTML pages (search for `260575943484`).

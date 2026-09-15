// Local campaign/product photography, imported directly from src/assets so
// Vite bundles + hashes them (guarantees a valid, always-resolvable URL —
// no dependency on an external host or an index that may not exist).
import img01 from '../assets/WhatsApp Image 2026-09-10 at 17.59.21.jpeg'
import img02 from '../assets/WhatsApp Image 2026-09-10 at 17.59.23 (1).jpeg'
import img03 from '../assets/WhatsApp Image 2026-09-10 at 17.59.23 (2).jpeg'
import img04 from '../assets/WhatsApp Image 2026-09-10 at 17.59.23.jpeg'
import img05 from '../assets/WhatsApp Image 2026-09-10 at 17.59.24 (1).jpeg'
import img06 from '../assets/WhatsApp Image 2026-09-10 at 17.59.24 (2).jpeg'
import img07 from '../assets/WhatsApp Image 2026-09-10 at 17.59.24.jpeg'
import img08 from '../assets/WhatsApp Image 2026-09-10 at 17.59.25 (1).jpeg'
import img09 from '../assets/WhatsApp Image 2026-09-10 at 17.59.25 (2).jpeg'
import img10 from '../assets/WhatsApp Image 2026-09-10 at 17.59.25 (3).jpeg'
import img11 from '../assets/WhatsApp Image 2026-09-10 at 17.59.25 (4).jpeg'
import img12 from '../assets/WhatsApp Image 2026-09-10 at 17.59.25 (5).jpeg'
import img13 from '../assets/WhatsApp Image 2026-09-10 at 17.59.25 (6).jpeg'
import img14 from '../assets/WhatsApp Image 2026-09-10 at 17.59.26 (15).jpeg'
import img15 from '../assets/WhatsApp Image 2026-09-10 at 17.59.26 (16).jpeg'
import img16 from '../assets/WhatsApp Image 2026-09-10 at 17.59.26 (4).jpeg'

/**
 * NOTE: some of these files carry a visible "TORANI" watermark baked
 * into the photo itself (not added by this code) — they came in this
 * way via the client's WhatsApp upload. They are wired in per request,
 * but should be swapped for cleared Israaya photography before this
 * site goes live on the client's domain.
 *
 * The Israaya logo wordmark and the swan motif graphic (also in
 * src/assets) are intentionally NOT included here — they're brand
 * collateral already used correctly elsewhere (Navbar, Loader,
 * CustomCursor), not garment photography.
 */
const LOCAL_PHOTOS = [
  img01, img02, img03, img04, img05, img06, img07, img08,
  img09, img10, img11, img12, img13, img14, img15, img16,
]

/**
 * Flat ordered list used by every product + site section below.
 * Longer than LOCAL_PHOTOS on purpose: it cycles through the local pool
 * so every index the app asks for (however many products/sections that
 * grows to) always resolves to a real image — never undefined, never
 * a broken <img>.
 */
const SLOTS_NEEDED = 40
export const PHOTOS: string[] = Array.from(
  { length: SLOTS_NEEDED },
  (_, i) => LOCAL_PHOTOS[i % LOCAL_PHOTOS.length]
)

/**
 * Site-wide (non-product-specific) photo assignments — hero, craft,
 * about, journal, etc. — pulled from the same local pool so nothing
 * outside the product grid can fall back to a placeholder either.
 */
export const SITE_PHOTOS = {
  hero: PHOTOS[24],
  collectionsHero: PHOTOS[33],
  collectionStory: PHOTOS[25],
  craftPrimary: PHOTOS[26],
  craftSecondary: PHOTOS[27],
  aboutStory: PHOTOS[28],
  aboutFounder: PHOTOS[29],
  aboutValues: [PHOTOS[30], PHOTOS[31], PHOTOS[32]],
  journal: [PHOTOS[34], PHOTOS[35], PHOTOS[36]],
}

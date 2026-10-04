// Single source of truth for all site photography.
//
// Every image on the site is read from `uploaded-links.json` (the R2-hosted
// Israaya campaign set). Nothing else in the codebase should import photos
// directly from src/assets — brand marks (logo, emblem, motif) are the only
// local image assets and they are not garment photography.
import uploaded from './uploaded-links.json'

interface UploadedLink {
  file: string
  url: string
}

const LINKS = (uploaded as UploadedLink[]).map((l) => l.url).filter(Boolean)

/**
 * Ordered pool of every uploaded URL. Cycles (modulo) if the app ever asks for
 * more slots than the JSON holds, so an index is always a real URL.
 */
export const PHOTOS: string[] = Array.from({ length: Math.max(LINKS.length, 48) }, (_, i) => LINKS[i % LINKS.length])

/**
 * Slots 0–23  → the 8 Nikhaar products (3 images each: front / back / detail),
 *               wired in lib/products.ts.
 * Slots 24–43 → site-wide editorial imagery below, one distinct image per
 *               placement so nothing repeats on the same page.
 */
export const SITE_PHOTOS = {
  hero: PHOTOS[20],
  collectionStory: PHOTOS[25],
  collectionsHero: PHOTOS[26],
  craft: [PHOTOS[27], PHOTOS[28], PHOTOS[29]],
  aboutStory: PHOTOS[30],
  aboutFounder: PHOTOS[31],
  aboutValues: [PHOTOS[32], PHOTOS[33], PHOTOS[34]],
  journal: [PHOTOS[35], PHOTOS[36], PHOTOS[37]],
  shopBanner: PHOTOS[38],
  contact: PHOTOS[39],
  notFound: PHOTOS[40],
  sizeGuide: PHOTOS[41],
  customization: PHOTOS[42],
  madeToOrder: PHOTOS[43],
}

import uploadedLinks from './uploaded-links.json'

/**
 * Flat ordered list of every real uploaded campaign/product photo URL
 * (hosted on the brand's R2 bucket). Nothing here is a placeholder —
 * every entry is a real Israaya photograph.
 */
export const PHOTOS: string[] = uploadedLinks.map((entry) => entry.url)

/**
 * Site-wide (non-product-specific) photo assignments — hero, craft,
 * about, journal, etc. — pulled from the same uploaded pool so nothing
 * outside the product grid falls back to a placeholder either.
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

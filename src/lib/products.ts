import { PHOTOS } from './photos'

export interface Product {
  id: string
  name: string
  category: string
  categorySlug: 'dhoti-sets' | 'sharara-sets' | 'anarkali-sets' | 'farsi-suits' | 'suit-sets' | 'skirt-sets'
  color: string
  swatch: string // hex used only as an image-load fallback tint
  images: string[] // [front, back, embroidery/detail] — real uploaded photography
  sizes: string[]
  fabric: string
  description: string
  price: number | null // null = price on enquiry (never fabricate)
  originalPrice: number | null
  discount: number | null
  collection: string
}

export const NIKHAAR_PRODUCTS: Product[] = [
  {
    id: 'hansa',
    name: 'Hansa',
    category: 'Three Piece Dhoti Set',
    categorySlug: 'dhoti-sets',
    color: 'Pista Green',
    swatch: '#a7b284',
    images: [PHOTOS[0], PHOTOS[1], PHOTOS[2]],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL'],
    fabric: 'Satin kurta, satin embroidered-border dupatta and satin dhoti pants.',
    description:
      'Hansa is an interpretation of swans in love, drifting through a garden of their own making. Made in satin with dori embroidery and pearl work, the three-piece dhoti set combines a vibrant colour with a modern yet rooted silhouette.',
    price: null,
    originalPrice: null,
    discount: 10,
    collection: 'Nikhaar',
  },
  {
    id: 'madhura',
    name: 'Madhura',
    category: 'Three Piece Sharara Set',
    categorySlug: 'sharara-sets',
    color: 'Lilac',
    swatch: '#c3b3d6',
    images: [PHOTOS[3], PHOTOS[4], PHOTOS[5]],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL'],
    fabric: 'Pure Chanderi kurta, Chanderi embroidered-border dupatta and Chanderi sharara.',
    description:
      'Madhura moves like a garden caught mid-bloom. Rendered in pure Chanderi with white and silver dori work and pearls, the sharara set is soft, fluid and built for movement.',
    price: null,
    originalPrice: null,
    discount: null,
    collection: 'Nikhaar',
  },
  {
    id: 'sitara-chandni',
    name: 'Sitara Chandni',
    category: 'Three Piece Anarkali Set',
    categorySlug: 'anarkali-sets',
    color: 'White',
    swatch: '#f2ede3',
    images: [PHOTOS[6], PHOTOS[7], PHOTOS[8]],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL'],
    fabric: 'Pure Chanderi kurta, Chanderi embroidered-border dupatta and Chanderi pants.',
    description:
      'Named for moonlight caught in silver, Sitara Chandni is a Chanderi anarkali set finished with silver zardozi embroidery — quiet, luminous, and made to move between occasions.',
    price: null,
    originalPrice: null,
    discount: null,
    collection: 'Nikhaar',
  },
  {
    id: 'kamal',
    name: 'Kamal',
    category: 'Three Piece Farsi Suit Set',
    categorySlug: 'farsi-suits',
    color: 'Pink Ombre',
    swatch: '#d9a7a0',
    images: [PHOTOS[9], PHOTOS[10], PHOTOS[11]],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL'],
    fabric: 'Silk kurta, organza ombre dupatta and silk farsi salwar.',
    description:
      'Kamal takes its name and its motion from the lotus. Butterfly and floral organza patchwork with beadwork sit against an ombre dupatta, in silk built for a modern farsi silhouette.',
    price: null,
    originalPrice: null,
    discount: null,
    collection: 'Nikhaar',
  },
  {
    id: 'sona-pankh',
    name: 'Sona Pankh',
    category: 'Three Piece Farsi Suit Set',
    categorySlug: 'farsi-suits',
    color: 'Champagne Gold',
    swatch: '#cdb583',
    images: [PHOTOS[12], PHOTOS[13], PHOTOS[14]],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL'],
    fabric: 'Silk kurta, heavily embroidered silk dupatta and silk farsi salwar.',
    description:
      'Sona Pankh — golden wing — is Nikhaar at its most radiant. Resham, pearls and sequins cover a heavily embroidered silk dupatta, paired with a fluid farsi salwar silhouette.',
    price: null,
    originalPrice: null,
    discount: null,
    collection: 'Nikhaar',
  },
  {
    id: 'komal-tara',
    name: 'Komal Tara',
    category: 'Three Piece Suit Set',
    categorySlug: 'suit-sets',
    color: 'Peach',
    swatch: '#e7bfa4',
    images: [PHOTOS[15], PHOTOS[16], PHOTOS[17]],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL'],
    fabric: 'Silk kurta, textured silk dupatta and silk pants.',
    description:
      'Komal Tara — gentle star — pairs resham and sequin embroidery with a textured silk dupatta, in a soft peach built for daytime occasions and beyond.',
    price: null,
    originalPrice: null,
    discount: null,
    collection: 'Nikhaar',
  },
  {
    id: 'morpankh',
    name: 'Morpankh',
    category: 'Three Piece Suit Set',
    categorySlug: 'suit-sets',
    color: 'Powder Blue',
    swatch: '#a9c2cc',
    images: [PHOTOS[18], PHOTOS[19], PHOTOS[20]],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL'],
    fabric: 'Chanderi kurta and pants with organza dupatta.',
    description:
      'Morpankh takes its name from the peacock feather. Hand beadwork inspired by peacock motifs sits across an organza dupatta, paired with Chanderi kurta and pants in powder blue.',
    price: null,
    originalPrice: null,
    discount: null,
    collection: 'Nikhaar',
  },
  {
    id: 'basant',
    name: 'Basant',
    category: 'Three Piece Skirt Set',
    categorySlug: 'skirt-sets',
    color: 'Yellow',
    swatch: '#e3c765',
    images: [PHOTOS[21], PHOTOS[22], PHOTOS[23]],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL'],
    fabric: 'Chanderi kurta, Chanderi skirt and net dupatta.',
    description:
      'Basant means spring. White dori work and pearl sequins move across a Chanderi kurta and skirt with a net dupatta, in a yellow built for the season it is named for.',
    price: null,
    originalPrice: null,
    discount: null,
    collection: 'Nikhaar',
  },
]

export const CATEGORIES: { label: string; slug: Product['categorySlug'] | 'all' }[] = [
  { label: 'All', slug: 'all' },
  { label: 'Dhoti Sets', slug: 'dhoti-sets' },
  { label: 'Sharara Sets', slug: 'sharara-sets' },
  { label: 'Anarkali Sets', slug: 'anarkali-sets' },
  { label: 'Farsi Suits', slug: 'farsi-suits' },
  { label: 'Suit Sets', slug: 'suit-sets' },
  { label: 'Skirt Sets', slug: 'skirt-sets' },
]

export function getProduct(id: string) {
  return NIKHAAR_PRODUCTS.find((p) => p.id === id)
}

export function formatPrice(price: number | null) {
  if (price === null) return 'Price on enquiry'
  return `₹${price.toLocaleString('en-IN')}`
}

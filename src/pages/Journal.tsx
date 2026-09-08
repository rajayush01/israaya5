import { usePageTitle } from '../components/ui/PageTitle'
import { RevealImage } from '../components/ui/RevealImage'
import { Photo } from '../components/ui/Photo'
import { SITE_PHOTOS } from '../lib/photos'

const ENTRIES = [
  {
    title: 'Inside Nikhaar: a study in nature',
    excerpt: 'How gardens, moonlight and peacock motifs became a debut chapter.',
    image: SITE_PHOTOS.journal[0],
  },
  {
    title: 'The karigars behind the craft',
    excerpt: 'Meeting the hands that hand-embroider every Israaya piece.',
    image: SITE_PHOTOS.journal[1],
  },
  {
    title: 'Made to order, made to last',
    excerpt: 'Why Israaya produces nothing until it is ordered.',
    image: SITE_PHOTOS.journal[2],
  },
]

export function Journal() {
  usePageTitle('Journal')
  return (
    <div className="pt-24">
      <div className="px-6 py-10 md:px-10">
        <h1 className="font-display text-5xl md:text-6xl">Journal</h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-charcoal/70">
          Notes on craft, collections and the world Israaya is building.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-16 px-6 py-10 md:grid-cols-3 md:px-10">
        {ENTRIES.map((entry) => (
          <article key={entry.title}>
            <RevealImage>
              <Photo src={entry.image} alt={entry.title} aspect="aspect-[4/5]" />
            </RevealImage>
            <h2 className="mt-4 font-display text-2xl leading-snug">{entry.title}</h2>
            <p className="mt-2 text-sm text-charcoal/60">{entry.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

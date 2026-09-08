import { Link } from 'react-router-dom'
import { RevealImage } from '../ui/RevealImage'
import { RevealText } from '../ui/RevealText'
import { Photo } from '../ui/Photo'
import { SITE_PHOTOS } from '../../lib/photos'

export function CollectionStory() {
  return (
    <section className="grid grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-16 md:px-10 md:py-32">
      <RevealImage>
        <Photo src={SITE_PHOTOS.collectionStory} alt="Nikhaar — garden study" aspect="aspect-[4/5]" />
      </RevealImage>

      <div className="max-w-md">
        <p className="text-[12px] tracking-[0.2em] uppercase text-charcoal/50">Nikhaar</p>
        <RevealText
          lines={['The full', 'blossoming', 'of beauty.']}
          className="mt-4 font-display text-5xl leading-[0.95] md:text-6xl"
        />
        <p className="mt-6 text-sm leading-relaxed text-charcoal/70">
          Inspired by gardens, moonlight, birds, flowers and the quiet details you only notice when you
          slow down.
        </p>
        <Link
          to="/collections"
          className="group mt-8 inline-flex items-center gap-2 text-[13px] tracking-[0.14em] uppercase"
        >
          Explore the chapter
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  )
}

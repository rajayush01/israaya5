import { RevealImage } from '../ui/RevealImage'
import { RevealText } from '../ui/RevealText'
import { Photo } from '../ui/Photo'
import { SITE_PHOTOS } from '../../lib/photos'

export function CraftSection() {
  return (
    <section className="bg-charcoal px-6 py-20 text-ivory md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <RevealText
          lines={['Craft before', 'decoration.']}
          className="font-display text-5xl leading-[0.95] md:text-7xl"
        />
        <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/60">
          Every piece is hand embroidered by karigars carrying generations of craft knowledge. Techniques
          are chosen with intention, and nothing is produced until it is ordered.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SITE_PHOTOS.craft.map((src, i) => (
            <RevealImage key={src + i} delay={i * 0.12}>
              <Photo src={src} alt="Karigar at work" aspect="aspect-[3/4]" />
            </RevealImage>
          ))}
        </div>
      </div>
    </section>
  )
}

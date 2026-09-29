import { Photo } from '../ui/Photo'
import { RevealImage } from '../ui/RevealImage'
import { SITE_PHOTOS } from '../../lib/photos'

export function Customization() {
  return (
    <section className="bg-bone px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <RevealImage>
          <Photo src={SITE_PHOTOS.customization} alt="Made for you — bespoke Israaya" aspect="aspect-[4/5]" />
        </RevealImage>
        <div className="md:max-w-xl">
          <h2 className="font-display text-5xl leading-[0.95] md:text-6xl">Made for you.</h2>
          <p className="mt-6 text-sm leading-relaxed text-charcoal/70">
            Every Israaya piece is made to order and open to customization, including sizing and small
            design changes.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            <a
              href="https://wa.me/"
              className="group inline-flex items-center gap-2 border-b border-charcoal pb-1 text-[13px] tracking-[0.14em] uppercase"
            >
              Bespoke enquiry
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

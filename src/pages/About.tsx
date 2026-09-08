import { RevealImage } from '../components/ui/RevealImage'
import { RevealText } from '../components/ui/RevealText'
import { Photo } from '../components/ui/Photo'
import { SITE_PHOTOS } from '../lib/photos'
import { usePageTitle } from '../components/ui/PageTitle'

const VALUES = [
  'Built by the hands we build around',
  'Made to order, not made to sit',
  'Time is part of the design',
  'Custom made for every body',
  'India on the global stage',
]

export function About() {
  usePageTitle('Our Story')
  return (
    <div className="pt-24">
      <section className="px-6 py-16 md:px-10 md:py-24">
        <p className="text-[12px] tracking-[0.2em] uppercase text-charcoal/50">Our Story</p>
        <RevealText
          lines={['Craft, comfort,', 'global design.']}
          className="mt-4 font-display text-6xl leading-[0.95] md:text-8xl"
        />
      </section>

      <section className="grid grid-cols-1 gap-10 px-6 py-10 md:grid-cols-2 md:gap-16 md:px-10">
        <RevealImage>
          <Photo src={SITE_PHOTOS.aboutStory} alt="Israaya — our story" aspect="aspect-[4/5]" />
        </RevealImage>
        <div className="flex flex-col justify-center">
          <p className="max-w-md text-sm leading-relaxed text-charcoal/70">
            Israaya was created to reimagine what Indian wear can be for today's woman — rooted in
            craft, made for comfort, and designed with a global sensibility.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-10 px-6 py-20 md:grid-cols-2 md:gap-16 md:px-10">
        <div className="order-2 flex flex-col justify-center md:order-1">
          <p className="text-[12px] tracking-[0.2em] uppercase text-charcoal/50">Founder & Creative Director</p>
          <h2 className="mt-3 font-display text-5xl">Khushi Dang</h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-charcoal/70">
            A story of craft, culture and a lifelong relationship with Indian fashion — brought to life
            through Israaya.
          </p>
        </div>
        <RevealImage className="order-1 md:order-2">
          <Photo src={SITE_PHOTOS.aboutFounder} alt="Khushi Dang — portrait" aspect="aspect-[4/5]" />
        </RevealImage>
      </section>

      <section className="bg-charcoal px-6 py-20 text-ivory md:px-10 md:py-32">
        <RevealText
          lines={['Made in India.', 'For the world.']}
          className="font-display text-5xl leading-[0.95] md:text-7xl"
        />
        <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/60">
          Every Israaya piece is made in India from start to finish, by karigar families carrying
          generations of craft knowledge.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Photo src={SITE_PHOTOS.aboutValues[0]} alt="Karigar hands" aspect="aspect-[3/4]" />
          <Photo src={SITE_PHOTOS.aboutValues[1]} alt="Embroidery process" aspect="aspect-[3/4]" />
          <Photo src={SITE_PHOTOS.aboutValues[2]} alt="Fabric detail" aspect="aspect-[3/4]" />
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-32">
        <h2 className="font-display text-4xl md:text-5xl">Our Values</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-5">
          {VALUES.map((v) => (
            <div key={v} className="border-t border-charcoal/10 pt-5">
              <p className="font-display text-xl leading-tight">{v}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

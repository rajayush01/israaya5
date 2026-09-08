import { Link } from 'react-router-dom'
import { NIKHAAR_PRODUCTS } from '../lib/products'
import { ProductCard } from '../components/ui/ProductCard'
import { RevealImage } from '../components/ui/RevealImage'
import { Photo } from '../components/ui/Photo'
import { SITE_PHOTOS } from '../lib/photos'
import { usePageTitle } from '../components/ui/PageTitle'

export function Collections() {
  usePageTitle('Collections')
  return (
    <div className="pt-24">
      <div className="px-6 py-10 md:px-10">
        <h1 className="font-display text-6xl md:text-7xl">Collections</h1>
      </div>

      <section className="grid grid-cols-1 gap-10 px-6 py-10 md:grid-cols-2 md:gap-16 md:px-10">
        <RevealImage>
          <Photo src={SITE_PHOTOS.collectionsHero} alt="Nikhaar — chapter I" aspect="aspect-[4/5]" />
        </RevealImage>
        <div className="flex flex-col justify-center">
          <p className="text-[12px] tracking-[0.2em] uppercase text-charcoal/50">Chapter I</p>
          <h2 className="mt-3 font-display text-6xl">Nikhaar</h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-charcoal/70">
            Nikhaar is Israaya's debut chapter, inspired entirely by nature and designed around soft
            colours, movement and versatility.
          </p>
          <p className="mt-6 text-[12px] tracking-[0.14em] uppercase text-charcoal/50">
            {NIKHAAR_PRODUCTS.length} pieces
          </p>
          <Link
            to="/shop"
            className="group mt-6 inline-flex w-fit items-center gap-2 text-[13px] tracking-[0.14em] uppercase"
          >
            Shop the collection
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-x-8 gap-y-14 px-6 py-16 sm:grid-cols-2 md:px-10 lg:grid-cols-3">
        {NIKHAAR_PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

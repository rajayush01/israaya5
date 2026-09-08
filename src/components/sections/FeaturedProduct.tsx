import { Link } from 'react-router-dom'
import type { Product } from '../../lib/products'
import { formatPrice } from '../../lib/products'
import { RevealImage } from '../ui/RevealImage'
import { Photo } from '../ui/Photo'

export function FeaturedProduct({ product }: { product: Product }) {
  return (
    <section className="px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <RevealImage>
          <Photo src={product.images[0]} alt={`${product.name} — full garment`} aspect="aspect-[4/5]" />
        </RevealImage>

        <div className="flex flex-col justify-center">
          <p className="text-[12px] tracking-[0.2em] uppercase text-charcoal/50">{product.collection}</p>
          <h2 className="mt-3 font-display text-6xl leading-[0.95]">{product.name}</h2>
          <p className="mt-2 text-sm text-charcoal/60">{product.category}</p>

          <p className="mt-4 text-[12px] tracking-[0.14em] uppercase text-charcoal/50">{product.color}</p>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-lg">{formatPrice(product.price)}</span>
            {product.discount && <span className="text-sm text-clay">{product.discount}% off</span>}
          </div>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-charcoal/70">{product.description}</p>

          <Link
            to={`/shop/${product.id}`}
            className="group mt-8 inline-flex w-fit items-center gap-2 text-[13px] tracking-[0.14em] uppercase"
          >
            Shop {product.name}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-charcoal/10 pt-6 text-[11px] tracking-[0.1em] uppercase text-charcoal/50">
            <span>Made to order</span>
            <span>15–20 days</span>
            <span>Custom sizing available</span>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { getProduct, formatPrice, NIKHAAR_PRODUCTS } from '../lib/products'
import { Photo } from '../components/ui/Photo'
import { ProductCard } from '../components/ui/ProductCard'
import { useCart } from '../state/cart'
import { usePageTitle } from '../components/ui/PageTitle'

const ACCORDIONS = [
  { title: 'Material & Fabric', content: null as string | null },
  { title: 'Wash Care', content: 'Dry clean only.' },
  {
    title: 'Delivery',
    content:
      '15–20 days, made to order, inclusive of delivery within India. International orders may take slightly longer. Colour may vary slightly due to the handmade nature of the piece.',
  },
  { title: 'Customization', content: 'Sizing and small design changes available on request.' },
  { title: 'Shipping', content: 'Shipping details are confirmed at checkout.' },
]

export function ProductDetail() {
  const { id } = useParams()
  const product = id ? getProduct(id) : undefined
  const [size, setSize] = useState<string | null>(null)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)
  const { addLine } = useCart()

  usePageTitle(product ? product.name : 'Shop')

  if (!product) return <Navigate to="/shop" replace />

  const related = NIKHAAR_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <div className="pt-24">
      <div className="grid grid-cols-1 gap-10 px-6 md:grid-cols-[1.3fr_1fr] md:gap-16 md:px-10">
        {/* Gallery */}
        <div className="grid grid-cols-2 gap-3">
          <Photo src={product.images[0]} alt={`${product.name} — front`} aspect="aspect-[3/4]" className="col-span-2" />
          <Photo src={product.images[1]} alt={`${product.name} — back`} aspect="aspect-[3/4]" />
          <Photo src={product.images[2]} alt={`${product.name} — embroidery detail`} aspect="aspect-[3/4]" />
        </div>

        {/* Info */}
        <div className="md:sticky md:top-28 md:self-start">
          <p className="text-[12px] tracking-[0.2em] uppercase text-charcoal/50">{product.collection}</p>
          <h1 className="mt-2 font-display text-5xl leading-[0.95]">{product.name}</h1>
          <p className="mt-2 text-sm text-charcoal/60">{product.category}</p>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-lg">{formatPrice(product.price)}</span>
            {product.discount && <span className="text-sm text-clay">{product.discount}% off</span>}
          </div>

          <p className="mt-4 text-[12px] tracking-[0.14em] uppercase text-charcoal/50">{product.color}</p>

          <div className="mt-8 border-t border-charcoal/10 pt-6">
            <p className="text-[12px] tracking-[0.14em] uppercase text-charcoal/50">Size</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`border px-3.5 py-2 text-xs transition-colors ${
                    size === s ? 'border-charcoal bg-charcoal text-ivory' : 'border-charcoal/20 hover:border-charcoal/50'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <Link to="/size-guide" className="mt-3 inline-block text-[12px] tracking-[0.1em] uppercase underline decoration-charcoal/30 underline-offset-4">
              Custom size →
            </Link>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-charcoal/10 pt-6">
            <button
              onClick={() => size && addLine(product, size)}
              disabled={!size}
              className="bg-charcoal py-4 text-[13px] tracking-[0.14em] uppercase text-ivory transition-colors hover:bg-clay-dark disabled:cursor-not-allowed disabled:opacity-40"
            >
              {size ? 'Add to Bag' : 'Select a size'}
            </button>
            <a
              href="https://wa.me/"
              className="border border-charcoal py-4 text-center text-[13px] tracking-[0.14em] uppercase transition-colors hover:bg-charcoal hover:text-ivory"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="mt-8 border-t border-charcoal/10 pt-6">
            <p className="text-[12px] tracking-[0.14em] uppercase text-charcoal/50">Description</p>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{product.description}</p>
          </div>

          <div className="mt-6 border-t border-charcoal/10">
            {ACCORDIONS.map((a, i) => (
              <div key={a.title} className="border-b border-charcoal/10">
                <button
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  className="flex w-full items-center justify-between py-4 text-left text-[13px] tracking-[0.06em]"
                >
                  {a.title.toUpperCase()}
                  <ChevronDown
                    size={16}
                    strokeWidth={1.5}
                    className={`transition-transform duration-300 ${openAccordion === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openAccordion === i && (
                  <p className="pb-4 text-sm leading-relaxed text-charcoal/70">
                    {a.title === 'Material & Fabric' ? product.fabric : a.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 px-6 py-16 md:px-10">
        <h2 className="font-display text-4xl">Complete the chapter</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  )
}

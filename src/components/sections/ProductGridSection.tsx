import { NIKHAAR_PRODUCTS } from '../../lib/products'
import { ProductCard } from '../ui/ProductCard'
import { RevealText } from '../ui/RevealText'

export function ProductGridSection() {
  const products = NIKHAAR_PRODUCTS

  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <RevealText
          lines={['Nikhaar', 'The Collection']}
          as="h2"
          className="font-display text-5xl leading-[0.95] md:text-7xl"
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
          <ProductCard product={products[0]} />
          <div className="md:mt-24">
            <ProductCard product={products[1]} />
          </div>
        </div>

        <div className="mt-16">
          <ProductCard product={products[2]} wide />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3">
          <ProductCard product={products[3]} />
          <ProductCard product={products[4]} />
          <ProductCard product={products[5]} />
        </div>
      </div>
    </section>
  )
}

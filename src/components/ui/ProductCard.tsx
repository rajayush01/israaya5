import { Link } from 'react-router-dom'
import { useState } from 'react'
import type { Product } from '../../lib/products'
import { formatPrice } from '../../lib/products'
import { Photo } from './Photo'

export function ProductCard({ product, wide = false }: { product: Product; wide?: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={`/shop/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor="view"
    >
      <div className={`relative overflow-hidden ${wide ? 'aspect-[16/10]' : 'aspect-[3/4]'}`}>
        <div
          className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          style={{ opacity: hovered ? 0 : 1, transition: 'opacity 0.4s ease' }}
        >
          <Photo src={product.images[0]} alt={product.name} className="h-full" aspect="" />
        </div>
        <div
          className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.4s ease' }}
        >
          <Photo src={product.images[1]} alt={`${product.name} — alternate view`} className="h-full" aspect="" />
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl">{product.name}</h3>
          <p className="mt-1 text-sm text-charcoal/60">{product.category}</p>
          <p className="mt-1 text-sm text-charcoal/60">{product.color}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-sm">{formatPrice(product.price)}</p>
          {product.discount && (
            <p className="mt-1 text-xs tracking-wide text-clay">{product.discount}% off</p>
          )}
        </div>
      </div>
    </Link>
  )
}

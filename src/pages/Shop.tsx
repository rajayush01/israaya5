import { useMemo, useState } from 'react'
import { NIKHAAR_PRODUCTS } from '../lib/products'
import { ProductCard } from '../components/ui/ProductCard'
import { CategoryStrip } from '../components/sections/CategoryStrip'
import { usePageTitle } from '../components/ui/PageTitle'

const SORTS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'low-high' },
  { label: 'Price: High to Low', value: 'high-low' },
  { label: 'Newest', value: 'newest' },
] as const

const ALL_SIZES = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL']

export function Shop() {
  usePageTitle('Shop')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState<(typeof SORTS)[number]['value']>('featured')
  const [size, setSize] = useState<string | null>(null)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const products = useMemo(() => {
    let list = [...NIKHAAR_PRODUCTS]
    if (category !== 'all') list = list.filter((p) => p.categorySlug === category)
    if (size) list = list.filter((p) => p.sizes.includes(size))
    if (sort === 'low-high') list.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity))
    if (sort === 'high-low') list.sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity))
    return list
  }, [category, sort, size])

  return (
    <div className="pt-24">
      <div className="px-6 py-10 md:px-10">
        <p className="text-[12px] tracking-[0.2em] uppercase text-charcoal/50">Nikhaar</p>
        <h1 className="mt-2 font-display text-5xl md:text-6xl">Shop</h1>
        <p className="mt-2 text-sm text-charcoal/50">{NIKHAAR_PRODUCTS.length} pieces</p>
      </div>

      <CategoryStrip active={category} onChange={setCategory} sticky />

      <div className="sticky top-[125px] z-20 flex items-center justify-between gap-4 border-b border-charcoal/10 bg-ivory px-6 py-4 md:top-[141px] md:px-10">
        <button
          onClick={() => setFiltersOpen((v) => !v)}
          className="text-[12px] tracking-[0.14em] uppercase text-charcoal/70"
        >
          Size {size ? `· ${size}` : ''}
        </button>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as (typeof SORTS)[number]['value'])}
          className="border border-charcoal/15 bg-transparent px-3 py-2 text-[12px] tracking-[0.1em] uppercase"
          aria-label="Sort products"
        >
          {SORTS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {filtersOpen && (
        <div className="flex flex-wrap gap-2 border-b border-charcoal/10 px-6 py-4 md:px-10">
          <button
            onClick={() => setSize(null)}
            className={`border px-3.5 py-2 text-xs transition-colors ${
              !size ? 'border-charcoal bg-charcoal text-ivory' : 'border-charcoal/20 hover:border-charcoal/50'
            }`}
          >
            All
          </button>
          {ALL_SIZES.map((s) => (
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
      )}

      <div className="grid grid-cols-1 gap-x-8 gap-y-14 px-6 py-10 sm:grid-cols-2 md:px-10 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {products.length === 0 && (
          <p className="col-span-full py-20 text-center text-sm text-charcoal/50">
            No pieces in this category yet.
          </p>
        )}
      </div>
    </div>
  )
}

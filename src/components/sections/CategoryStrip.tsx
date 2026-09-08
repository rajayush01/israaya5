import { CATEGORIES } from '../../lib/products'

export function CategoryStrip({
  active,
  onChange,
  sticky = false,
}: {
  active: string
  onChange: (slug: string) => void
  sticky?: boolean
}) {
  return (
    <div
      className={`z-30 flex gap-8 overflow-x-auto border-b border-charcoal/10 bg-ivory px-6 py-4 no-scrollbar md:px-10 ${
        sticky ? 'sticky top-[73px]' : ''
      }`}
    >
      {CATEGORIES.map((c) => (
        <button
          key={c.slug}
          onClick={() => onChange(c.slug)}
          className={`shrink-0 text-[12px] tracking-[0.14em] uppercase transition-colors ${
            active === c.slug ? 'text-charcoal border-b border-clay pb-1' : 'text-charcoal/45 hover:text-charcoal/70'
          }`}
        >
          {c.label}
        </button>
      ))}
    </div>
  )
}

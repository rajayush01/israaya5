import { RevealText } from '../ui/RevealText'

const POINTS = [
  { label: '15–20 days', sub: 'Delivery' },
  { label: 'Custom', sub: 'Measurements' },
  { label: 'Hand', sub: 'Embroidered' },
  { label: 'Made', sub: 'In India' },
]

export function MadeToOrder() {
  return (
    <section className="border-y border-charcoal/10 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <RevealText
          lines={['Made to order.', 'Nothing is produced until it is ordered.']}
          className="max-w-2xl font-display text-4xl leading-[1.05] md:text-5xl"
        />

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {POINTS.map((p) => (
            <div key={p.sub} className="border-t border-charcoal/10 pt-4">
              <p className="font-display text-2xl">{p.label}</p>
              <p className="mt-1 text-[11px] tracking-[0.14em] uppercase text-charcoal/50">{p.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

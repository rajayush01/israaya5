import { usePageTitle } from '../components/ui/PageTitle'

const FAQS = [
  {
    q: 'Is everything made to order?',
    a: 'Yes. Nothing is produced until it is ordered. This keeps our production intentional and lets every piece be sized to you.',
  },
  {
    q: 'How long does delivery take?',
    a: '15–20 days from order confirmation, inclusive of delivery within India. International orders may take slightly longer.',
  },
  {
    q: 'Can I customize sizing or design?',
    a: 'Yes. Sizing and small design changes are available on request — message us before or during checkout.',
  },
  {
    q: 'How should I care for my piece?',
    a: 'Dry clean only. Colour may vary slightly due to the handmade nature of each piece.',
  },
]

export function FAQ() {
  usePageTitle('FAQs')
  return (
    <div className="pt-24">
      <div className="px-6 py-16 md:px-10 md:py-24">
        <h1 className="font-display text-5xl md:text-6xl">FAQs</h1>
        <div className="mt-10 max-w-xl divide-y divide-charcoal/10 border-t border-charcoal/10">
          {FAQS.map((item) => (
            <div key={item.q} className="py-6">
              <h2 className="text-sm font-medium">{item.q}</h2>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

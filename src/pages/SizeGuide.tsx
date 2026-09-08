import { usePageTitle } from '../components/ui/PageTitle'

const SIZES = [
  { size: 'XS', bust: '32"', waist: '25"', hip: '35"' },
  { size: 'S', bust: '34"', waist: '27"', hip: '37"' },
  { size: 'M', bust: '36"', waist: '29"', hip: '39"' },
  { size: 'L', bust: '38"', waist: '31"', hip: '41"' },
  { size: 'XL', bust: '40"', waist: '33"', hip: '43"' },
  { size: '2XL', bust: '42"', waist: '35"', hip: '45"' },
  { size: '3XL', bust: '44"', waist: '37"', hip: '47"' },
]

export function SizeGuide() {
  usePageTitle('Size Guide')
  return (
    <div className="pt-24">
      <div className="px-6 py-10 md:px-10">
        <h1 className="font-display text-5xl md:text-6xl">Size Guide</h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-charcoal/70">
          Every Israaya piece is made to order, from XS to 7XL. If your measurements fall between sizes,
          or you'd like a fully custom fit, we recommend custom measurements.
        </p>
      </div>

      <div className="overflow-x-auto px-6 py-10 md:px-10">
        <table className="w-full min-w-[480px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-charcoal/15 text-[11px] tracking-[0.14em] uppercase text-charcoal/50">
              <th className="py-3 pr-6">Size</th>
              <th className="py-3 pr-6">Bust</th>
              <th className="py-3 pr-6">Waist</th>
              <th className="py-3 pr-6">Hip</th>
            </tr>
          </thead>
          <tbody>
            {SIZES.map((row) => (
              <tr key={row.size} className="border-b border-charcoal/10">
                <td className="py-3 pr-6 font-display text-lg">{row.size}</td>
                <td className="py-3 pr-6 text-charcoal/70">{row.bust}</td>
                <td className="py-3 pr-6 text-charcoal/70">{row.waist}</td>
                <td className="py-3 pr-6 text-charcoal/70">{row.hip}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 text-xs text-charcoal/50">
          4XL–7XL and fully custom measurements are available on request — reach out via WhatsApp or
          email before ordering.
        </p>
      </div>

      <div className="border-t border-charcoal/10 px-6 py-10 md:px-10">
        <h2 className="font-display text-2xl">Custom Measurements</h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal/70">
          Since every piece is made to order, custom sizing is always available at no extra step —
          simply note it with your order or message us before checkout.
        </p>
        <a
          href="https://wa.me/"
          className="group mt-6 inline-flex items-center gap-2 text-[13px] tracking-[0.14em] uppercase"
        >
          WhatsApp us your measurements
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  )
}

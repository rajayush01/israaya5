import { Link } from 'react-router-dom'

const COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'Nikhaar', to: '/collections' },
      { label: 'All Products', to: '/shop' },
    ],
  },
  {
    title: 'Customer Care',
    links: [
      { label: 'Contact Us', to: '/contact' },
      { label: 'FAQs', to: '/faq' },
      { label: 'Shipping & Delivery', to: '/shipping' },
      { label: 'Returns & Exchanges', to: '/returns' },
      { label: 'Cancellation Policy', to: '/cancellation' },
      { label: 'Size Guide', to: '/size-guide' },
      { label: 'Care Guide', to: '/care-guide' },
      { label: 'Bespoke Enquiries', to: '/bespoke' },
    ],
  },
  {
    title: 'Follow',
    links: [{ label: 'Instagram', to: 'https://instagram.com/israayaindiaofficial' }],
  },
  {
    title: 'Contact',
    links: [
      { label: 'WhatsApp', to: 'https://wa.me/' },
      { label: 'Email', to: 'mailto:hello@israaya.com' },
    ],
  },
]

const LEGAL = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'Shipping Policy', to: '/shipping' },
  { label: 'Return & Exchange Policy', to: '/returns' },
  { label: 'Cancellation Policy', to: '/cancellation' },
  { label: 'Disclaimer', to: '/disclaimer' },
]

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-ivory px-6 pt-16 pb-8 md:px-10">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-10 md:grid-cols-5">
        <div className="col-span-2 md:col-span-1">
          <span className="font-display text-2xl tracking-[0.08em]">ISRAAYA</span>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="text-[12px] tracking-[0.14em] uppercase text-charcoal/50">{col.title}</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-charcoal/80 hover:text-clay transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-[1600px]">
        <h2 className="font-display text-[13vw] leading-[0.9] tracking-tight md:text-[7vw]">
          Craft,
          <br />
          reconsidered.
        </h2>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1600px] flex-col-reverse items-start justify-between gap-4 border-t border-charcoal/10 pt-6 md:flex-row md:items-center">
        <p className="text-xs text-charcoal/50">© {new Date().getFullYear()} Israaya. Made in India.</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {LEGAL.map((item) => (
            <li key={item.label}>
              <Link to={item.to} className="text-xs text-charcoal/50 hover:text-clay transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

import { usePageTitle } from '../components/ui/PageTitle'

export function Contact() {
  usePageTitle('Contact')
  return (
    <div className="pt-24">
      <div className="px-6 py-16 md:px-10 md:py-24">
        <h1 className="font-display text-5xl md:text-6xl">Contact Us</h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-charcoal/70">
          For orders, customization or bespoke enquiries, reach us directly — we typically respond
          within one business day.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://wa.me/"
            className="border border-charcoal px-8 py-4 text-center text-[13px] tracking-[0.14em] uppercase transition-colors hover:bg-charcoal hover:text-ivory"
          >
            WhatsApp
          </a>
          <a
            href="mailto:hello@israaya.com"
            className="border border-charcoal px-8 py-4 text-center text-[13px] tracking-[0.14em] uppercase transition-colors hover:bg-charcoal hover:text-ivory"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  )
}

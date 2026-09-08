import type { ReactNode } from 'react'
import { usePageTitle } from '../components/ui/PageTitle'

export function InfoPage({ title, children }: { title: string; children?: ReactNode }) {
  usePageTitle(title)
  return (
    <div className="pt-24">
      <div className="px-6 py-16 md:px-10 md:py-24">
        <h1 className="font-display text-5xl md:text-6xl">{title}</h1>
        <div className="mt-6 max-w-xl text-sm leading-relaxed text-charcoal/70">
          {children ?? (
            <p>
              This page is being finalized. For any questions in the meantime, reach us on WhatsApp or
              email via the Contact page.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

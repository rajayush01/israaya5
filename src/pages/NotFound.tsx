import { Link } from 'react-router-dom'
import { usePageTitle } from '../components/ui/PageTitle'

export function NotFound() {
  usePageTitle('Page Not Found')
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 text-center">
      <h1 className="font-display text-6xl">404</h1>
      <p className="mt-4 text-sm text-charcoal/60">This page doesn't exist.</p>
      <Link
        to="/"
        className="group mt-8 inline-flex items-center gap-2 text-[13px] tracking-[0.14em] uppercase"
      >
        Return home
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </Link>
    </div>
  )
}

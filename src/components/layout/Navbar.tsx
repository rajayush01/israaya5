import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, Search, User, ShoppingBag } from 'lucide-react'
import { useCart } from '../../state/cart'
import logo from "../../assets/ISRAAYA LOGO.svg"

const LINKS = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/collections' },
  { label: 'Our Story', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export function Navbar({ onMenuOpen, solid = false }: { onMenuOpen: () => void; solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const { count, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const dark = solid || scrolled || !isHome
  const textColor = dark ? 'text-charcoal' : 'text-ivory'

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        dark ? 'bg-ivory/90 backdrop-blur-md border-b border-charcoal/[0.06]' : 'bg-transparent'
      }`}
    >
      <div
        className={`mx-auto grid max-w-[1600px] grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-4 md:px-10 md:py-2 ${textColor}`}
      >
        {/* Logo — fixed height, auto width, no more dominating the header */}
        <Link to="/" className="flex h-8 shrink-0 items-center md:h-20">
          <img src={logo} alt="ISRAAYA" className="h-full w-auto object-contain" />
        </Link>

        {/* Center nav — true center via grid, not leftover flex space */}
        <nav className="hidden items-center justify-self-center gap-8 md:flex lg:gap-10">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="whitespace-nowrap text-[13px] tracking-[0.14em] uppercase hover:opacity-60 transition-opacity"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Icons — pinned right */}
        <div className="flex items-center justify-self-end gap-4 md:gap-5">
          <button aria-label="Search" className="hidden md:inline-flex hover:opacity-60 transition-opacity">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button aria-label="Account" className="hidden md:inline-flex hover:opacity-60 transition-opacity">
            <User size={18} strokeWidth={1.5} />
          </button>
          <button
            aria-label={`Bag, ${count} items`}
            onClick={openCart}
            className="relative inline-flex hover:opacity-60 transition-opacity"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-clay text-[10px] text-ivory">
                {count}
              </span>
            )}
          </button>
          <button aria-label="Open menu" onClick={onMenuOpen} className="inline-flex md:hidden">
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </motion.header>
  )
}
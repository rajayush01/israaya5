import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'

const LINKS = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/collections' },
  { label: 'Our Story', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

const UTILS = [
  { label: 'Search', to: '/shop' },
  { label: 'Account', to: '/account' },
  { label: 'Bag', to: '/shop' },
]

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-50 flex flex-col bg-ivory px-6 py-5"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl tracking-[0.08em]">ISRAAYA</span>
            <button aria-label="Close menu" onClick={onClose}>
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="mt-16 flex flex-col gap-6">
            {LINKS.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to={l.to} onClick={onClose} className="font-display text-4xl">
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-4 border-t border-charcoal/10 pt-6">
            {UTILS.map((u, i) => (
              <motion.div
                key={u.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
              >
                <Link
                  to={u.to}
                  onClick={onClose}
                  className="text-[13px] tracking-[0.14em] uppercase text-charcoal/60"
                >
                  {u.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

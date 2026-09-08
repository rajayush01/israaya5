import { AnimatePresence, motion } from 'framer-motion'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '../../state/cart'
import { formatPrice } from '../../lib/products'
import { Photo } from '../ui/Photo'

export function CartDrawer() {
  const { isOpen, closeCart, lines, updateQuantity, removeLine } = useCart()

  const subtotal = lines.reduce((sum, l) => sum + (l.product.price ?? 0) * l.quantity, 0)
  const hasEnquiryItems = lines.some((l) => l.product.price === null)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-charcoal/30 backdrop-blur-[2px]"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-ivory px-6 py-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-[13px] tracking-[0.14em] uppercase">Your Bag</h2>
              <button aria-label="Close bag" onClick={closeCart}>
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="mt-8 flex-1 overflow-y-auto no-scrollbar">
              {lines.length === 0 ? (
                <p className="text-sm text-charcoal/50">Your bag is empty.</p>
              ) : (
                <ul className="flex flex-col gap-6">
                  {lines.map((l) => (
                    <li key={`${l.product.id}-${l.size}`} className="flex gap-4">
                      <Photo src={l.product.images[0]} alt={l.product.name} className="w-24 shrink-0" aspect="aspect-[3/4]" />
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <h3 className="font-display text-lg">{l.product.name}</h3>
                          <p className="text-xs text-charcoal/60">{l.product.category}</p>
                          <p className="mt-1 text-xs text-charcoal/60">
                            {l.product.color} · Size {l.size}
                          </p>
                        </div>
                        <button
                          aria-label="Remove item"
                          onClick={() => removeLine(l.product.id, l.size)}
                          className="w-fit text-charcoal/40 hover:text-clay transition-colors"
                        >
                          <Trash2 size={13} strokeWidth={1.5} />
                        </button>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 border border-charcoal/15 px-2 py-1">
                            <button
                              aria-label="Decrease quantity"
                              onClick={() => updateQuantity(l.product.id, l.size, l.quantity - 1)}
                            >
                              <Minus size={13} strokeWidth={1.5} />
                            </button>
                            <span className="w-4 text-center text-xs">{l.quantity}</span>
                            <button
                              aria-label="Increase quantity"
                              onClick={() => updateQuantity(l.product.id, l.size, l.quantity + 1)}
                            >
                              <Plus size={13} strokeWidth={1.5} />
                            </button>
                          </div>
                          <span className="text-sm">{formatPrice(l.product.price)}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {lines.length > 0 && (
              <div className="border-t border-charcoal/10 pt-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[12px] tracking-[0.14em] uppercase text-charcoal/60">Subtotal</span>
                  <span>{hasEnquiryItems ? 'Confirmed on enquiry' : formatPrice(subtotal)}</span>
                </div>
                <button className="mt-5 w-full bg-charcoal py-4 text-[13px] tracking-[0.14em] uppercase text-ivory transition-colors hover:bg-clay-dark">
                  Checkout →
                </button>
                <p className="mt-4 text-center text-xs text-charcoal/50">
                  Made to order · 15–20 days delivery
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

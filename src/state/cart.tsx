import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { Product } from '../lib/products'

export interface CartLine {
  product: Product
  size: string
  quantity: number
}

interface CartContextValue {
  lines: CartLine[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addLine: (product: Product, size: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  removeLine: (productId: string, size: string) => void
  count: number
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addLine = (product: Product, size: string) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.product.id === product.id && l.size === size)
      if (existing) {
        return prev.map((l) =>
          l.product.id === product.id && l.size === size ? { ...l, quantity: l.quantity + 1 } : l
        )
      }
      return [...prev, { product, size, quantity: 1 }]
    })
    setIsOpen(true)
  }

  const updateQuantity = (productId: string, size: string, quantity: number) => {
    setLines((prev) =>
      prev
        .map((l) => (l.product.id === productId && l.size === size ? { ...l, quantity } : l))
        .filter((l) => l.quantity > 0)
    )
  }

  const removeLine = (productId: string, size: string) => {
    setLines((prev) => prev.filter((l) => !(l.product.id === productId && l.size === size)))
  }

  const count = useMemo(() => lines.reduce((sum, l) => sum + l.quantity, 0), [lines])

  return (
    <CartContext.Provider
      value={{
        lines,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addLine,
        updateQuantity,
        removeLine,
        count,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

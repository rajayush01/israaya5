import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { MobileMenu } from './MobileMenu'
import { Footer } from './Footer'
import { CartDrawer } from './CartDrawer'
import { CustomCursor } from './CustomCursor'

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="cursor-none-desktop min-h-screen">
      <CustomCursor />
      <Navbar onMenuOpen={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <CartDrawer />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

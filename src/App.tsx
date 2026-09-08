import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Loader } from './components/layout/Loader'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { ProductDetail } from './pages/ProductDetail'
import { Collections } from './pages/Collections'
import { About } from './pages/About'
import { SizeGuide } from './pages/SizeGuide'
import { Journal } from './pages/Journal'
import { Contact } from './pages/Contact'
import { FAQ } from './pages/FAQ'
import { InfoPage } from './pages/InfoPage'
import { NotFound } from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Loader visible={loading} />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/size-guide" element={<SizeGuide />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/bespoke" element={<Contact />} />
          <Route
            path="/shipping"
            element={
              <InfoPage title="Shipping & Delivery">
                <p>
                  All pieces are made to order, with delivery within 15–20 days of order confirmation.
                  Delivery within India is included; international orders may take slightly longer.
                </p>
              </InfoPage>
            }
          />
          <Route
            path="/returns"
            element={
              <InfoPage title="Returns & Exchanges">
                <p>
                  As every piece is made to order for you, we're unable to accept general returns.
                  Reach out via Contact if something isn't right with your order.
                </p>
              </InfoPage>
            }
          />
          <Route
            path="/cancellation"
            element={
              <InfoPage title="Cancellation Policy">
                <p>
                  Since production begins on order confirmation, cancellations are only possible within
                  a short window after ordering. Contact us as soon as possible if you need to cancel.
                </p>
              </InfoPage>
            }
          />
          <Route
            path="/care-guide"
            element={
              <InfoPage title="Care Guide">
                <p>Dry clean only. Colour may vary slightly due to the handmade nature of each piece.</p>
              </InfoPage>
            }
          />
          <Route path="/privacy" element={<InfoPage title="Privacy Policy" />} />
          <Route path="/terms" element={<InfoPage title="Terms & Conditions" />} />
          <Route path="/disclaimer" element={<InfoPage title="Disclaimer" />} />
          <Route path="/account" element={<InfoPage title="Account" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

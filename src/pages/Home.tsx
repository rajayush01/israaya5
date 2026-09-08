import { Hero } from '../components/sections/Hero'
import { ProductGridSection } from '../components/sections/ProductGridSection'
import { CollectionStory } from '../components/sections/CollectionStory'
import { FeaturedProduct } from '../components/sections/FeaturedProduct'
import { CraftSection } from '../components/sections/CraftSection'
import { ProductCarousel } from '../components/sections/ProductCarousel'
import { MadeToOrder } from '../components/sections/MadeToOrder'
import { Customization } from '../components/sections/Customization'
import { getProduct } from '../lib/products'
import { usePageTitle } from '../components/ui/PageTitle'

export function Home() {
  usePageTitle('Contemporary Indian Wear')
  const hansa = getProduct('hansa')!

  return (
    <>
      <Hero />
      <ProductGridSection />
      <CollectionStory />
      <FeaturedProduct product={hansa} />
      <CraftSection />
      <ProductCarousel />
      <MadeToOrder />
      <Customization />
    </>
  )
}

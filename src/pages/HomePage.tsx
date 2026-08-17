import { FeatureCarousel } from '@/components/home/FeatureCarousel'
import { Hero } from '@/components/home/Hero'
import { Newsletter } from '@/components/home/Newsletter'

export function HomePage() {
  return (
    <>
      <Hero />
      <FeatureCarousel />
      <Newsletter />
    </>
  )
}

export const metadata = {
  title: 'Fundraising School - Be a great deal for investors and raise money like a pro',
  description: 'Fuel your LATAM startup at Fundraising School. Master fundraising with expert-led courses on pitch decks and venture capital. Join to accelerate growth, achieve goals, and network with founders. Unleash fundraising expertise for success!',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Features />
      <FeaturesBlocks />
      <Newsletter />
    </>
  )
}

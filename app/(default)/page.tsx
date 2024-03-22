export const metadata = {
  title: 'Fundraising School - Be a great deal for investors and raise money like a pro',
  description: 'Fuel your LATAM startup at Fundraising School. Master fundraising with expert-led courses on pitch decks and venture capital. Join to accelerate growth, achieve goals, and network with founders. Unleash fundraising expertise for success!',
}

import Hero from '@/components/Hero'
import Sponsors from '@/components/Sponsors'
import Speakers from '@/components/Speakers'
import Hosts from '@/components/Hosts'
import Questions from '@/components/Questions'
import Features from '@/components/Features'
import YtVideo from '@/components/YtVideo'
import Curriculum from '@/components/Curriculum'
import Mentors from '@/components/Mentors'


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Speakers />
      <Mentors />
      <Hosts />
      <Curriculum />
      <Sponsors />
      <YtVideo />
      <Questions />
    </>
  )
}

export const metadata = {
  title: 'Fundraising School - Be a great deal for investors and raise money like a pro',
  description: 'Fuel your LATAM startup at Fundraising School. Master fundraising with expert-led courses on pitch decks and venture capital. Join to accelerate growth, achieve goals, and network with founders. Unleash fundraising expertise for success!',
}

import Hero from '@/components/hero'
import Sponsors from '@/components/sponsors'
import Tutors from '@/components/tutors'
import Moderators from '@/components/moderators'
import Questions from '@/components/questions'
import Features from '@/components/features'
import Components from '@/components/components'
import YtVideo from '@/components/ytvideo'
import FormAirtable from '@/components/FormAirtable'


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <Components /> */}
      <Sponsors />
      <FormAirtable />
      <YtVideo />
      <Tutors />
      <Moderators />
      <Questions />
    </>
  )
}

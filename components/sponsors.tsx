import Image from 'next/image'
import ontop from '@/public/images/partners/ontop.png'
import faktory from '@/public/images/startups/faktory.png'
import truora from '@/public/images/partners/truora.png'
import azure from '@/public/images/partners/azure.png'

export default function Sponsors() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <h2 className="h2 mb-4">TTrusted by these partners, our community benefit from more than $50k in deals from the generous companies that support our community</h2> */}
            <p className="text-xl font-semibold " data-aos="zoom-y-out">Our community benefit from more than $50k in deals from these trusted partners.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 [&>div>img]:grayscale">

            {/* Item OnTop */}
            <div data-aos="zoom-y-out" className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={ontop} alt='Logo of OnTop' width={120} />
            </div>

            {/* Item Faktory */}
            <div data-aos="zoom-y-out" className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={faktory} alt='Logo of Faktory' width={120} />
            </div>

            {/* Item Truora */}
            <div data-aos="zoom-y-out" className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={truora} alt='Logo of Truora' width={120} />
            </div>

            {/* Item  AZURE MICROSOFT*/}
            <div data-aos="zoom-y-out" className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src={azure} alt='Logo of AZURE MICROSOFT' width={60} />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
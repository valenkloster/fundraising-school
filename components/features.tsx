
type Card = {
  title: string,
  description: string,
}

const cards: Card[] = [
  {
    title: 'Masterclasses',
    description: "Navigate your fundraising journey with precision. Our masterclasses are more than just courses—they’re a hands-on, strategic playbook delivered by those who've excelled in the arena. Each session is a step towards turning your vision into a venture backed by the best."
  },
  {
    title: 'Community',
    description: "Thrive in a collective of innovators. Our community is your network, sounding board, and support system all in one. Engage in rich, insightful dialogues with entrepreneurs and founders that challenge and champion your pitch, strategy, and growth, ensuring you're investor-ready."
  }
]


export default function Features() {
  return (
    <section className="relative text-center py-12 md:py-20 bg-[#f5f5f5]">
      <div className="max-w-sm md:max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="h2 mb-2" data-aos="zoom-y-out">Unlock your full potential</h2>
        <p className="text-xl text-gray-600 pb-12 md:pb-16" data-aos="zoom-y-out">Elevate your startup journey with tailored masterclasses, tactical expertise and transformative insights, designed to amplify your success in today's competitive business landscape.</p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {
            cards.map((card, index) => (
              <article key={index} className="text-left flex flex-col gap-2 p-6 m-2 bg-white rounded-xl border-gray-300" data-aos="zoom-y-out">
                <h3 className="font-semibold text-lg">{card.title}</h3>
                <hr className="my-2 w-full border-gray-300" />
                <p className="leading-6 text-gray-600">{card.description}</p>
              </article>
            ))
          }
        </div>
      </div>
    </section>
  )
}
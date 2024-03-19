type Card = {
    title: string,
    description: string,
}

const cards: Card[] = [
    {
        title: 'Make It Happen Mindset',
        description: "Embracing a 'Can Do, Will Do' mindset propels superpowers to leading entrepreneurs. Our curriculum instills not just the belief in your vision, but the conviction and the tactics to realize it. Make the leap from dreamer to doer."
    },
    {
        title: 'Be a great deal',
        description: "Discover the art of valuation that turns heads in the investment world. Our approach helps you not just be a great deal, but the best deal at the table. Find your sweet spot with precision and negotiate from a position of strength."
    },
    {
        title: 'Funding fluency',
        description: "Thrive in a collective of innovators. Our community is your network, sounding board, and support system all in one. Engage in rich, insightful dialogues with entrepreneurs and founders that challenge and champion your pitch, strategy, and growth, ensuring you're investor-ready."
    }
]



export default function YtVideo() {
    return (
        <>
            {/* <section className="relative text-center py-12 md:py-20 bg-[#f5f5f5]">
                <div className="max-w-sm md:max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="h2 mb-2" data-aos="zoom-y-out">Good-bye to complex startup hassle.</h2>
                    <p className="text-xl text-gray-600 pb-12 md:pb-16" data-aos="zoom-y-out">Say farewell to the complexities of the past and unlock a smoother path to success. Welcome to a new era of fundraising simplicity and efficiency.</p>
                    <div className="flex flex-col">
                        {
                            cards.map((card, index) => (
                                <article key={index} className="text-left block w-auto gap-2 p-6 m-2 bg-white rounded-xl border-gray-300" data-aos="zoom-y-out">
                                    <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                                    <hr className="my-2 w-full border-gray-300" />
                                    <p className="leading-6 text-gray-600">{card.description}</p>
                                </article>
                            ))
                        }
                    </div>
                </div>
            </section> */}
            <section className="relative text-center py-12 md:py-20">
                <div className="max-w-sm md:max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center">
                    <h2 className="h2 mb-2" data-aos="zoom-y-out">Wanna be part of something big?</h2>
                    <p className="text-xl text-gray-600 pb-12 md:pb-16" data-aos="zoom-y-out">You will receive personalized advice to learn how to actually get funded.</p>
                    <div className="relative block w-full h-0 pb-[56.25%]">
                        <iframe className="absolute left-0 top-0 w-full h-full" src="https://www.youtube.com/embed/1R5-cTsDS-8?si=jQ6gCnYLwsX351rK" frameBorder={0} title="YouTube video player" allowFullScreen></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}

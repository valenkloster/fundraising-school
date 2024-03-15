type Card = {
    title: string,
    description: string,
}

const cards: Card[] = [
    {
        title: 'Live classes',
        description: "Delivered by successful founders with Series A funding and specialized investors"
    },
    {
        title: 'Mentorship by experts',
        description: "Access mentorship and feedback from investors and founders"
    },
    {
        title: 'Peer-to-Peer networking',
        description: "Virtual and in-person networking with peers in select cities"
    },
    {
        title: 'Playbooks',
        description: "Tactical recommendations for fundraising"
    }
]

export default function Components() {
    return (
        <section className="relative text-center py-12 md:py-20">
            <div className="max-w-sm md:max-w-4xl mx-auto px-4 sm:px-6">
                <h2 className="h2 pb-12 md:pb-16" data-aos="zoom-y-out">Designed by entrepreneurs for entrepreneurs</h2>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                    {
                        cards.map((card, index) => (
                            <article key={index} className="text-left flex flex-col gap-2 p-6 m-2 bg-[#f5f5f5] rounded-xl border-gray-300" data-aos="zoom-y-out">
                                <h3 className="font-semibold text-lg">{card.title}</h3>
                                <hr className="mt-2 w-full border-gray-300" />
                                <p className="leading-normal text-gray-800 my-2">{card.description}</p>
                            </article>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

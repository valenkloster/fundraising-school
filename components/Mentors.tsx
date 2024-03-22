
import Profile from "@/components/ui/profile"
import MentorsData from "@/data/mentors"

export default function Mentors() {
    return (
        <section className="relative text-center py-12 md:py-20 px-4 sm:px-6 bg-[#f5f5f5]">
            <div className="max-w-4xl mx-auto">
                <h2 className="h2 pb-12 md:pb-16" data-aos="zoom-y-out">Mentors</h2>
                <div className="mx-auto flex gap-8 flex-wrap">
                    {
                        MentorsData.map((speaker, index) => (
                            <Profile key={index} profile={speaker} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

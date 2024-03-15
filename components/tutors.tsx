import Profile from "@/components/ui/profile"
import tutors from "@/data/tutors"

export default function Tutors() {
    return (
        <section className="relative text-center py-12 md:py-20 bg-gray-100">
            <div className="max-w-sm md:max-w-4xl mx-auto">
                <h2 className="h2 pb-12 md:pb-16" data-aos="zoom-y-out">Who you will learn from</h2>
                <div className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                    {
                        tutors.map((tutor, index) => (
                            <Profile key={index} profile={tutor} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

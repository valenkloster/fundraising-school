import Image from "next/image"
import andres_bilbao_profile from "@/public/images/tutors/andres_bilbao_profile.png"
import laura_gaviria_profile from "@/public/images/tutors/laura_gaviria_profile.png"

export default function Moderators() {
    return (
        <section className="relative text-center py-12 md:py-20 bg-gray-100">
            <div className="max-w-sm md:max-w-4xl mx-auto">
                {/* TITLE */}
                <h2 className="h2 pb-12 md:pb-16" data-aos="zoom-y-out">Organizers and moderators</h2>
                <div className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">

                    {/* First Item */}
                    <div className="flex" data-aos="zoom-y-out">
                        <Image src={laura_gaviria_profile} alt={`Picture of Laura Gaviria Halaby`} width={180} height={180} />
                        <div className="text-left h-auto my-auto flex flex-col">
                            <h3 className="font-semibold text-lg">Laura Gaviria Halaby</h3>
                        </div>
                    </div>


                    {/* Second Item */}
                    <div className="flex" data-aos="zoom-y-out">
                        <Image src={andres_bilbao_profile} alt={`Picture of Andres Bilbao`} width={180} height={180} />
                        <div className="text-left h-auto my-auto flex flex-col">
                            <h3 className="font-semibold text-lg">Andrés Bilbao</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

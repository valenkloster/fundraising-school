import Image from "next/image"
import andres_bilbao_profile from "@/public/images/tutors/andres_bilbao_profile.png"
import laura_gaviria_profile from "@/public/images/tutors/laura_gaviria_profile.png"

import rappi from "@/public/images/startups/rappi.png"
import b2 from "@/public/images/startups/b2.png"
import makers from "@/public/images/startups/makers.png"


export default function Moderators() {
    return (
        <section className="relative text-center pb-12 md:pb-20 px-4 sm:px-6 bg-[#f5f5f5]">
            <div className="max-w-sm md:max-w-4xl mx-auto">
                {/* TITLE */}
                <h2 className="h2 pb-12 md:pb-16" data-aos="zoom-y-out">Organizers and moderators</h2>
                <div className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                    {/* First Item */}
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-normal items-center" data-aos="zoom-y-out">
                        <Image src={laura_gaviria_profile} alt={`Picture of Laura Gaviria Halaby`} width={180} height={180} style={{ aspectRatio: 1, display: "block", width: 180, height: 180 }} />
                        <div className="text-left h-auto my-auto flex flex-col">
                            <h3 className="font-semibold  text-center sm:text-lg sm:text-left">Laura Gaviria Halaby</h3>
                            <ul className="w-[60dvw] sm:w-auto list-disc list-outside marker:text-gray-400 font-light [&>li]:my-1 [&>li]:translate-x-4">
                                <li>Faktory AI</li>
                                <li>Ex-SoftBank Founder</li>
                                <li>SoftBank Operator School</li>
                                <li>Kauffman Fellow</li>
                                <li>Startup Investor and Advisor</li>
                            </ul>
                        </div>
                    </div>

                    {/* Second Item */}
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center" data-aos="zoom-y-out">
                        <Image src={andres_bilbao_profile} alt={`Picture of Andres Bilbao`} width={180} height={180} style={{ aspectRatio: 1, display: "block", width: 180, height: 180 }} />
                        <div className="text-left h-auto my-auto flex flex-col">
                            <h3 className="font-semibold text-center sm:text-lg sm:text-left">Andrés Bilbao</h3>
                            <ul className="w-[60dvw] sm:w-auto list-disc list-outside marker:text-gray-400 font-light [&>li]:my-1 [&>li]:translate-x-4">
                                <li>Co-founder
                                    <div className="my-4 flex gap-2">
                                        <Image src={makers} alt="image of Makers" width={32} />
                                        <Image src={b2} alt="image of B2 Founders" width={32} />
                                        <Image src={rappi} alt="image of Rappi" width={58} />
                                    </div>
                                </li>
                                <li>Helped start and fundraise 17 startups in LATAM.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

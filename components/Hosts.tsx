import Image from "next/image"
import andres_bilbao_profile from "@/public/images/tutors/andres_bilbao_profile.png"
import laura_gaviria_profile from "@/public/images/tutors/laura_gaviria_profile.png"

import rappi from "@/public/images/startups/rappi.png"
import makers from "@/public/images/startups/makers.png"
import softbank from "@/public/images/startups/softbank.png"
import faktory from "@/public/images/startups/faktory.png"


export default function Hosts() {
    return (
        <section className="relative text-center pb-12 md:pb-20 px-4 sm:px-6 bg-[#f5f5f5]">
            <div className="max-w-4xl mx-auto">
                {/* TITLE */}
                <h2 className="h2 pb-12 md:pb-16" data-aos="zoom-y-out">Hosts And Coaches</h2>
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
                    {/* First Item */}
                    <article className="max-w-[280px] md:max-w-[400px] mx-auto flex flex-col md:flex-row justify-center sm:justify-normal items-center sm:items-start" data-aos="zoom-y-out">
                        <Image src={laura_gaviria_profile} alt={`Picture of Laura Gaviria Halaby`} className="sm:-translate-y-5" width={180} height={180} style={{ aspectRatio: 1, display: "block", width: 180, height: 180 }} />
                        <div className="text-left h-auto flex flex-col max-w-[280px] md:max-w-[400px]">
                            <h3 className="font-semibold  text-center sm:text-lg sm:text-left">Laura Gaviria Halaby</h3>
                            <ul className="list-disc list-outside marker:text-gray-400 font-light [&>li]:md:max-w-[400px] [&>li]:max-w-[220px] [&>li]:my-1 [&>li]:translate-x-4">
                                <li>Faktory AI</li>
                                <li>Ex-SoftBank Latam</li>
                                <li>Founder of SoftBank<br />AI Academy and <br />Operator School</li>
                                <div className="my-4 flex gap-2 flex-wrap translate-x-4">
                                    <Image src={faktory} alt="image of Faktory AI" width={80} />
                                    <Image src={softbank} alt="image of Ex-SoftBank" width={110} />
                                </div>
                            </ul>
                        </div>
                    </article>

                    {/* Second Item */}
                    <article className="max-w-[280px] md:max-w-[400px] mx-auto flex flex-col md:flex-row justify-center sm:justify-normal items-center sm:items-start" data-aos="zoom-y-out">
                        <Image src={andres_bilbao_profile} alt={`Picture of Andres Bilbao`} className="sm:-translate-y-5" width={180} height={180} style={{ aspectRatio: 1, display: "block", width: 180, height: 180 }} />
                        <div className="text-left h-auto flex flex-col max-w-[280px] md:max-w-[400px]">
                            <h3 className="font-semibold text-center sm:text-lg sm:text-left">Andrés Bilbao</h3>
                            <ul className="list-disc list-outside marker:text-gray-400 font-light [&>li]:md:max-w-[400px] [&>li]:max-w-[220px] [&>li]:my-1 [&>li]:translate-x-4">
                                <li className="text-pretty">Co-founder
                                    <div className="my-4 flex gap-2">
                                        <Image src={makers} alt="image of Makers" width={35} />
                                        <Image src={rappi} alt="image of Rappi" width={80} height={35} />
                                    </div>
                                </li>
                                <li>Helped start and fundraise 17 startups in LATAM.</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

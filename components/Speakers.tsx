'use client'

import Profile from "@/components/ui/profile"
import SpeakersData from "@/data/speakers"
import { Speaker } from "@/models/speaker"
import { useState, useEffect } from "react"

export default function Speakers() {
    const [showMore, setShowMore] = useState<boolean>(false)
    const [speakers, setSpeakers] = useState<Speaker[]>(SpeakersData.slice(0, 8))

    useEffect(() => {
        if (showMore) {
            setSpeakers(SpeakersData)
        } else {

        }

    }, [showMore])

    return (
        <section id="speakers" className="relative text-center py-12 md:py-20 px-4 sm:px-6 bg-[#f5f5f5]">
            <div className="max-w-4xl mx-auto">
                <h2 className="h2 pb-12 md:pb-16" data-aos="zoom-y-out">Who you will learn from</h2>
                <div className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
                    {
                        speakers.map((speaker, index) => (
                            <Profile key={index} profile={speaker} />
                        ))
                    }
                </div>
                {
                    !showMore && (
                        <button className="rounded-3xl btn text-[#637EE0] bg-white border-[#637EE0] hover:text-white hover:bg-[#637EE0] focus:bg-[#3F61AA] focus:text-white duration-150 w-full mb-4 px-14 sm:w-auto sm:mb-0" onClick={() => setShowMore(true)}>Show More</button>
                    )
                }
            </div>
        </section>
    )
}

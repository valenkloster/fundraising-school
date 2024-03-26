'use client'

import Image, { StaticImageData } from 'next/image'
import curriculum_movil from "@/public/images/curriculum/curriculum_movil.jpg"
import curriculum from "@/public/images/curriculum/curriculum.jpg"
import { useEffect, useState } from 'react'

export default function Curriculum() {
    const [image, setImage] = useState<StaticImageData>(curriculum)

    useEffect(() => {
        function handlerResize() {
            const width = window.innerWidth;
            if (width <= 640) {
                setImage(curriculum_movil)
            } else {
                setImage(curriculum)
            }
        }

        window.addEventListener('resize', handlerResize);
        return () => window.removeEventListener('resize', handlerResize);
    }, [])


    return (
        <section id='curriculum' className='relative text-center py-12 md:py-20 px-4 sm:px-6'>
            <div className="max-w-4xl mx-auto" data-aos="zoom-y-out">
                <h2 className="h2 mb-2" data-aos="zoom-y-out">Preliminary Curriculum </h2>
                <Image src={image} alt={"Image with the curriculum of fundraising school"} priority />
            </div>
        </section>
    )
}


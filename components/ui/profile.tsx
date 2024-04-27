import Image from "next/image"
import { Speaker } from "@/models/speaker"
import { StaticImport } from "next/dist/shared/lib/get-img-props"


export default function Profile({ profile }: { profile: Speaker }) {
    return (
        <article className="flex flex-col items-center mx-auto h-[360px] min-w-[220px]" data-aos="zoom-y-out">
            <Image src={profile.srcImageProfile as string | StaticImport} alt={`Picture of ${profile.name}`} width={180} height={180} />
            <div className="text-left h-auto flex flex-col items-center">
                <h3 className="font-semibold text-lg">{profile.name}</h3>
                <p className="font-light my-2 text-center">{profile.description}</p>
                <Image src={profile.srcImageStartUp as string | StaticImport} alt={`Logo of startup where work ${profile.name}`} priority width={profile.imageStartUpSize.width} height={profile.imageStartUpSize.height} />
            </div>
        </article>
    )
}

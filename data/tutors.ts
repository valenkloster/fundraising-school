import { Tutor } from "@/models/tutor"

import simon_borrero_profile from "@/public/images/tutors/simon_borrero_profile.png"
import david_velez_profile from "@/public/images/tutors/david_velez_profile.png"
import gabriel_vasquez_profile from "@/public/images/tutors/gabriel_vasquez_profile.png"
import nico_berman_profile from "@/public/images/tutors/nico_berman_profile.png"
import mercedes_bent_profile from "@/public/images/tutors/mercedes_bent_profile.png"
import paulo_passoni_profile from "@/public/images/tutors/paulo_passoni_profile.png"

import nubank from "@/public/images/startups/nubank.png"
import rappi from "@/public/images/startups/rappi.png"
import a16z from "@/public/images/startups/a16z.png"
import kaszek from "@/public/images/startups/kaszek-ventures.png"
import valor from "@/public/images/startups/valor.png"
import lightspeed from "@/public/images/startups/lightspeed.png"

const Tutors: Tutor[] = [
    {
        name: "Mercedes Bent",
        description: "Partner at Lightspeed",
        srcImageProfile: mercedes_bent_profile,
        srcImageStartUp: lightspeed,
        imageStartUpSize: {
            height: 50,
            wight: 140
        }
    },
    {
        name: "David Vélez",
        description: "Founder and CEO Nubank",
        srcImageProfile: david_velez_profile,
        srcImageStartUp: nubank,
        imageStartUpSize: {
            height: 50,
            wight: 60
        }
    },
    {
        name: "Nico Berman",
        description: "Partner at Kaszek",
        srcImageProfile: nico_berman_profile,
        srcImageStartUp: kaszek,
        imageStartUpSize: {
            height: 50,
            wight: 100
        }
    },
    {
        name: "Paulo Passoni",
        description: "Head of Growth Investing Valor Capital",
        srcImageProfile: paulo_passoni_profile,
        srcImageStartUp: valor,
        imageStartUpSize: {
            height: 50,
            wight: 100
        }
    },
    {
        name: "Simón Borrero",
        description: "Co-founder & CEO",
        srcImageProfile: simon_borrero_profile,
        srcImageStartUp: rappi,
        imageStartUpSize: {
            height: 50,
            wight: 70
        }
    },
    {
        name: "Gabriel Vasquez",
        description: "Investment Partner A16Z",
        srcImageProfile: gabriel_vasquez_profile,
        srcImageStartUp: a16z,
        imageStartUpSize: {
            height: 45,
            wight: 45
        }
    },
]

export default Tutors

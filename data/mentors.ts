import type { Speaker } from "@/models/speaker"

// PROFILES
import diego_galvez_profile from "@/public/images/mentors/diego_galvez_profile.png"
import laura_gonzalez_profile from "@/public/images/mentors/laura_gonzalez_profile.png"
import daniela_alvarez_profile from "@/public/images/mentors/daniela_alvarez_profile.png"
import javier_villamizar_profile from "@/public/images/mentors/javier_villamizar_profile.png"
import ana_cristina_gadala_profile from "@/public/images/mentors/ana_cristina_gadala_profile.png"

import mexOpp from "@/public/images/startups/mexOpp.png"
import stays from "@/public/images/startups/stays.jpeg"
import nazca from "@/public/images/startups/nazca.png"
import softbank from "@/public/images/startups/softbank.png"
import qed_investors from "@/public/images/startups/qed_investors.jpeg"

const Mentors: Speaker[] = [
    {
        name: 'Diego Galvez',
        description: 'Founder',
        srcImageProfile: diego_galvez_profile,
        srcImageStartUp: mexOpp,
        imageStartUpSize: {
            height: 60,
            width: 60
        },
    },
    {
        name: 'Laura Gonzalez',
        description: 'CBO Strategic Growth',
        srcImageProfile: laura_gonzalez_profile,
        srcImageStartUp: stays,
        imageStartUpSize: {
            height: 60,
            width: 60
        },
    },
    {
        name: 'Daniela Alvarez',
        description: 'Angel Investments',
        srcImageProfile: daniela_alvarez_profile,
        srcImageStartUp: nazca,
        imageStartUpSize: {
            height: 60,
            width: 60
        },
    },
    {
        name: 'Javier Villamizar',
        description: 'Operating Partner',
        srcImageProfile: javier_villamizar_profile,
        srcImageStartUp: softbank,
        imageStartUpSize: {
            height: 50,
            width: 120
        },
    },
    {
        name: 'Ana Cristina Gadala',
        description: 'Early stage fintech investor',
        srcImageProfile: ana_cristina_gadala_profile,
        srcImageStartUp: qed_investors,
        imageStartUpSize: {
            height: 50,
            width: 50
        },
    },
]

export default Mentors

import type { Speaker } from "@/models/speaker"

// PROFILES
import diego_galvez_profile from "@/public/images/mentors/diego_galvez_profile.png"
import laura_gonzalez_profile from "@/public/images/mentors/laura_gonzalez_profile.png"
import daniela_alvarez_profile from "@/public/images/mentors/daniela_alvarez_profile.png"
import javier_villamizar_profile from "@/public/images/mentors/javier_villamizar_profile.png"
import ana_cristina_gadala_profile from "@/public/images/mentors/ana_cristina_gadala_profile.png"
import cristina_kenna_profile from "@/public/images/mentors/cristina_kenna_profile.png"
import freddy_vega_profile from "@/public/images/mentors/freddy_vega_profile.png"
import christian_van_der_henst_profile from "@/public/images/mentors/christian_van_der_henst_profile.png"
import karla_berman_profile from "@/public/images/mentors/karla_berman_profile.png"
import eyal_shats_profile from "@/public/images/mentors/eyal_shats_profile.png"
import adrian_garcia_aranyos_profile from "@/public/images/mentors/adrian_garcia_aranyos_profile.png"
import sarah_alsaleh_profile from "@/public/images/mentors/sarah_alsaleh_profile.png"
import alfonso_rios_profile from "@/public/images/mentors/alfonso_rios_profile.png"
import anderson_thees_profile from "@/public/images/mentors/anderson_thees_profile.png"
import federico_storani_profile from "@/public/images/mentors/federico_storani_profile.png"
import hoi_ying_profile from "@/public/images/mentors/hoi_ying_profile.png"

import mexOpp from "@/public/images/startups/mexOpp.png"
import stays from "@/public/images/startups/stays.jpeg"
import nazca from "@/public/images/startups/nazca.png"
import softbank from "@/public/images/startups/softbank.png"
import qed_investors from "@/public/images/startups/qed_investors.jpeg"
import platzi from "@/public/images/startups/platzi.png"
import ignia from "@/public/images/startups/ignia.png"
import shark_tank from "@/public/images/startups/shark_tank.png"
import simpli_route from "@/public/images/startups/simpli_route.jpeg"
import endeavorglobal from "@/public/images/startups/endeavorglobal.jpeg"
import outliersvc from "@/public/images/startups/outliersvc.jpeg"
import nowports from "@/public/images/startups/nowports.jpg"
import banco_itau from "@/public/images/startups/banco_itau.png"
import riverwood_capital from "@/public/images/startups/riverwood_capital.jpeg"
import ifc from "@/public/images/startups/ifc.jpg"

const Mentors: Speaker[] = [
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
        name: 'Karla Berman',
        description: 'Shark Tank México',
        srcImageProfile: karla_berman_profile,
        srcImageStartUp: shark_tank,
        imageStartUpSize: {
            height: 60,
            width: 60
        },
    },
    {
        name: 'Adrian Garcia-Aranyos',
        description: 'Global President',
        srcImageProfile: adrian_garcia_aranyos_profile,
        srcImageStartUp: endeavorglobal,
        imageStartUpSize: {
            height: 60,
            width: 60
        },
    },
    {
        name: 'Christine Kenna',
        description: 'Partner',
        srcImageProfile: cristina_kenna_profile,
        srcImageStartUp: ignia,
        imageStartUpSize: {
            height: 60,
            width: 110
        },
    },
    {
        name: 'Freddy Vega',
        description: 'Founder and CEO',
        srcImageProfile: freddy_vega_profile,
        srcImageStartUp: platzi,
        imageStartUpSize: {
            height: 60,
            width: 110
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
    {
        name: 'Christian Van Der Henst',
        description: 'Co-founder and President',
        srcImageProfile: christian_van_der_henst_profile,
        srcImageStartUp: platzi,
        imageStartUpSize: {
            height: 60,
            width: 110
        },
    },
    {
        name: 'Sarah AlSaleh',
        description: 'General Partner',
        srcImageProfile: sarah_alsaleh_profile,
        srcImageStartUp: outliersvc,
        imageStartUpSize: {
            height: 60,
            width: 60
        },
    },
    {
        name: 'Eyal Shats',
        description: 'Co-founder and CSO',
        srcImageProfile: eyal_shats_profile,
        srcImageStartUp: simpli_route,
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
            width: 140
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
        name: 'Diego Galvez',
        description: 'Founder',
        srcImageProfile: diego_galvez_profile,
        srcImageStartUp: mexOpp,
        imageStartUpSize: {
            height: 70,
            width: 120
        },
    },
    {
        name: 'ALfonso de los Rios',
        description: 'Founder and CEO',
        srcImageProfile: alfonso_rios_profile,
        srcImageStartUp: nowports,
        imageStartUpSize: {
            height: 60,
            width: 60
        },
    },
    {
        name: 'Hoi Ying So',
        description: 'Global Co-Head and VC',
        srcImageProfile: hoi_ying_profile,
        srcImageStartUp: ifc,
        imageStartUpSize: {
            height: 60,
            width: 60
        },
    },
    {
        name: 'Anderson Thees',
        description: 'Venture Capitalist',
        srcImageProfile: anderson_thees_profile,
        srcImageStartUp: banco_itau,
        imageStartUpSize: {
            height: 60,
            width: 60
        },
    },
    {
        name: 'Federico Storani',
        description: 'Executive Director',
        srcImageProfile: federico_storani_profile,
        srcImageStartUp: riverwood_capital,
        imageStartUpSize: {
            height: 60,
            width: 60
        },
    },
]

export default Mentors

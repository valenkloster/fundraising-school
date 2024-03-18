import { Tutor } from "@/models/tutor"

import simon_borrero_profile from "@/public/images/tutors/simon_borrero_profile.png"
import david_velez_profile from "@/public/images/tutors/david_velez_profile.png"
import gabriel_vasquez_profile from "@/public/images/tutors/gabriel_vasquez_profile.png"
import nico_berman_profile from "@/public/images/tutors/nico_berman_profile.png"
import mercedes_bent_profile from "@/public/images/tutors/mercedes_bent_profile.png"
import paulo_passoni_profile from "@/public/images/tutors/paulo_passoni_profile.png"
import brynne_mcnulty_profile from "@/public/images/tutors/brynne_mcnulty_profile.png"
import carlos_dapuzzo_profile from "@/public/images/tutors/carlos_dapuzzo_profile.png"
import courtney_powell_profile from "@/public/images/tutors/courtney_powell_profile.png"
import enrique_conde_profile from "@/public/images/tutors/enrique_conde_profile.png"
import juan_felipe_muñoz_profile from "@/public/images/tutors/juan_felipe_muñoz_profile.png"
import keith_ferrazzi_profile from "@/public/images/tutors/keith_ferrazzi_profile.png"
import marcelo_claure_profile from "@/public/images/tutors/marcelo_claure_profile.png"
import mike_maples_jr_profile from "@/public/images/tutors/mike_maples_jr_profile.png"
import rodrigo_baer_profile from "@/public/images/tutors/rodrigo_baer_profile.png"


import nubank from "@/public/images/startups/nubank.png"
import rappi from "@/public/images/startups/rappi.png"
import habi from "@/public/images/startups/habi.png"
import floodgate from "@/public/images/startups/floodgate.png"
import a16z from "@/public/images/startups/a16z.png"
import kaszek from "@/public/images/startups/kaszek-ventures.png"
import valor from "@/public/images/startups/valor.png"
import lightspeed from "@/public/images/startups/lightspeed.png"
import monashees from "@/public/images/startups/monashees.png"
import upload from "@/public/images/startups/upload.png"
import bicycle from "@/public/images/startups/bicycle.png"
import logo_500 from "@/public/images/startups/500.png"
import hk from "@/public/images/startups/hk.png"
import green from "@/public/images/startups/green.png"
import llyc from "@/public/images/startups/llyc.jpeg"

const Tutors: Tutor[] = [
    {
        name: "David Vélez",
        description: "Founder & CEO",
        srcImageProfile: david_velez_profile,
        srcImageStartUp: nubank,
        imageStartUpSize: {
            height: 50,
            wight: 60
        }
    },
    {
        name: "Simón Borrero",
        description: "Founder & CEO",
        srcImageProfile: simon_borrero_profile,
        srcImageStartUp: rappi,
        imageStartUpSize: {
            height: 50,
            wight: 70
        }
    },
    {
        name: "Brynne McNulty",
        description: "Founder & CEO",
        srcImageProfile: brynne_mcnulty_profile,
        srcImageStartUp: habi,
        imageStartUpSize: {
            height: 50,
            wight: 70
        }
    },
    {
        name: "Mike Maples, Jr",
        description: "Managing Partner",
        srcImageProfile: mike_maples_jr_profile,
        srcImageStartUp: floodgate,
        imageStartUpSize: {
            height: 50,
            wight: 140
        }
    },
    {
        name: "Nico Berman",
        description: "Partner",
        srcImageProfile: nico_berman_profile,
        srcImageStartUp: kaszek,
        imageStartUpSize: {
            height: 50,
            wight: 100
        }
    },
    {
        name: "Paulo Passoni",
        description: "Managing Partner",
        srcImageProfile: paulo_passoni_profile,
        srcImageStartUp: valor,
        imageStartUpSize: {
            height: 50,
            wight: 100
        }
    },
    {
        name: "Carlo Dapuzzo",
        description: "General Partner",
        srcImageProfile: carlos_dapuzzo_profile,
        srcImageStartUp: monashees,
        imageStartUpSize: {
            height: 50,
            wight: 140
        }
    },
    {
        name: "Mercedes Bent",
        description: "Partner",
        srcImageProfile: mercedes_bent_profile,
        srcImageStartUp: lightspeed,
        imageStartUpSize: {
            height: 50,
            wight: 140
        }
    },
    {
        name: "Rodrigo Baer",
        description: "Co-founder and Managing Partner",
        srcImageProfile: rodrigo_baer_profile,
        srcImageStartUp: upload,
        imageStartUpSize: {
            height: 70,
            wight: 70
        }
    },
    {
        name: "Marcelo Claure",
        description: "Chairman and Managing Partner",
        srcImageProfile: marcelo_claure_profile,
        srcImageStartUp: bicycle,
        imageStartUpSize: {
            height: 50,
            wight: 80
        }
    },
    {
        name: "Courtney Powell",
        description: "Managing Partner & COO",
        srcImageProfile: courtney_powell_profile,
        srcImageStartUp: logo_500,
        imageStartUpSize: {
            height: 50,
            wight: 140
        }
    },
    {
        name: "Enrique Conde",
        description: "Partner",
        srcImageProfile: enrique_conde_profile,
        srcImageStartUp: hk,
        imageStartUpSize: {
            height: 50,
            wight: 170
        }
    },
    {
        name: "Gabriel Vasquez",
        description: "Investment Partner",
        srcImageProfile: gabriel_vasquez_profile,
        srcImageStartUp: a16z,
        imageStartUpSize: {
            height: 45,
            wight: 45
        }
    },
    {
        name: "Juan Felipe Muñoz",
        description: "CEO",
        srcImageProfile: juan_felipe_muñoz_profile,
        srcImageStartUp: llyc,
        imageStartUpSize: {
            height: 45,
            wight: 45
        }
    },
    {
        name: "Keith Ferrazzi",
        description: "author of \"Never Eat Alone\"",
        srcImageProfile: keith_ferrazzi_profile,
        srcImageStartUp: green,
        imageStartUpSize: {
            height: 70,
            wight: 140
        }
    },
]

export default Tutors

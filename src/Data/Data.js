import {LiaHandshakeSolid} from "react-icons/lia";
import {PiGraphLight} from "react-icons/pi";
import {BsGraphUp, BsHeartPulse} from "react-icons/bs"

import img5 from "../assets/yanis.webp"

import img6 from "../assets/noemie-lise.jpg"
import img7 from "../assets/ludovic.webp"

import mezard from "../assets/fabien-mezard.webp"
import sassi from "../assets/hosni-sassi.png"
import vindry from "../assets/dominique-vindry.webp"
import hendrickx from "../assets/fabienne-hendrickx.webp"
import pichard from "../assets/elisabeth-pichard.webp"
import fernoux from "../assets/lucas-fernoux.webp"



export const navLinks = [
    {label:"Accueil",href:"/"},
    {label:"Boutique",href:"/shop"},
    {label:"Galerie Photo",href:"/photo"},
    {label:"Sponsoring",href:"/sponsoring"},
    {label:"Nous contacter",href:"/contact"},
]

export const services = [
    {
        icon:<LiaHandshakeSolid />,
        label:"RESPECT"
    },
    {
        icon:<BsHeartPulse />,
        label:"PLAISIR"
    },
    {
        icon:<PiGraphLight />,
        label:"PARTAGE"
    },
    {
        icon:<BsGraphUp />,
        label:"PROGRÈS"
    }
]


export const client = [
    {
        id:1,
        desc:'"Travailler avec les jeunes du FCSF est une expérience enrichissante au quotidien. Au-delà du terrain, nous construisons ensemble des valeurs de respect, de solidarité et de dépassement de soi. C\'est une fierté de voir ces jeunes évoluer et s\'épanouir dans un environnement aussi positif et bienveillant."',
        img:img5,
        clientName:"Yanis",
        role: "Éducateur"
    },
    {
        id:2,
        desc:'"Toujours impressionnée par l\'atmosphère chaleureuse et conviviale qui règne lors des matchs. C\'est un plaisir de partager ma passion pour le football avec d\'autres fans et de soutenir nos équipes avec enthousiasme."',
        img:img6,
        clientName:"Noémie Lise",
        role: "Supportrice"
    },
    {
        id:3,
        desc:'"Offrir à nos membres la meilleure expérience possible. Cela signifie travailler en équipe, écouter les besoins de chacun et prendre des décisions transparentes et équitables. C\'est un défi passionnant et gratifiant, que nous relevons avec engagement et enthousiasme chaque jour."',
        img:img7,
        clientName:"Ludovic",
        role: "Bénévole"
    },
]

export const teamMembers =[
    {
        img:mezard,
        role:"Président",
        name:"Fabien MEZARD"
    },
    {
        img:sassi,
        role:"Président Délégué",
        name:"Hosni SASSI"
    },
    {
        img:vindry,
        role:"Trésorier",
        name:"Dominique VINDRY"
    },
    {
        img:hendrickx,
        role:"Vice-Trésorière",
        name:"Fabienne HENDRICKX"
    },
    {
        img:pichard,
        role:'Secrétaire Générale',
        name:"Élisabeth PICHARD"
    },
    {
        img:fernoux,
        role:"Vice-Président",
        name:"Lucas FERNOUX"
    },
]

export const events =[
    {
        month:"5",
        date:"15/05/2025",
        titre:"Tournoi U11",
        time:"9h-16h",
        place: "Stade PDL"
    },
    {
        month:"5",
        date:"18/05/2025",
        titre:"Tournoi U7",
        time:"9h-16h",
        place: "Stade PDL"
    },
    {
        month:"5",
        date:"19/05/2025",
        titre:"Tournoi U9",
        time:"9h-16h",
        place: "Stade PDL"
    },
    {
        month:"6",
        date:"02/06/2025",
        titre:"Tournoi U13",
        time:"9h-16h",
        place: "Stade PDL"
    },
    {
        month:"6",
        date:"16/06/2025",
        titre:"Tournoi Féminine",
        time:"9h-16h",
        place: "Stade PDL"
    },
]

export const teams =[
    {
        name :"SENIOR M1",
        widget: "667985ee9bd15b08cf62f802"
    },
    {
        name :"SENIOR M2",
        widget: "667987909bd15b08cde34eed"
    },
    {
        name :"U20 M1",
        widget: "667987aa0844ac08ca14c038"
    },
    {
        name :"U20 M2",
        widget: "667987ba9bd15b08cf62f807"
    },
    {
        name :"U18 F1",
        widget: "667987cd0844ac08c46405f3"
    },
    {
        name :"U17 M1",
        widget: "667987e79bd15b08d1b0d351"
    },
    {
        name :"U17 M2",
        widget: "667988290844ac08ca14c03a"
    },
    {
        name :"U17 M3",
        widget: "667988a80844ac08c57b59d4"
    },
    {
        name :"U15 M1",
        widget: "667988f80844ac08c46405f5"
    },
    {
        name :"U15 M2",
        widget: "6679890e0844ac08c57b59d7"
    },
    {
        name :"U15 F1",
        widget: "667989249bd15b08d28aad8c"
    },
    {
        name :"U13 M1",
        widget: "667989320844ac08c57b59d8"
    },
    {
        name :"U13 M2",
        widget: "66798a2d0844ac08c606d911"
    },
    {
        name :"U13 M3",
        widget: "66798a469bd15b08cf62f80b"
    },
    {
        name :"U13 F1",
        widget: "66798a8e0844ac08c46405f9"
    },
    {
        name :"U12 M1",
        widget: "66798a790844ac08ca14c03e"
    },
    {
        name :"VETERAN M1",
        widget: "66798aa00844ac08c606d913"
    },
    {
        name :"LOISIR M1",
        widget: "66798ab30844ac08c606d914"
    },
    {
        name :"LOISIR M2",
        widget: "66798ac09bd15b08cde34ef6"
    },
    {
        name :"LOISIR M3",
        widget: "66798acd9bd15b08d1b0d355"
    }
]

export const blog = [
    {   img:"https://img.youtube.com/vi/ymuFO-myE_Q/maxresdefault.jpg",
        date:"23 Avril 2024",
        role:"Pieds Carrés",
        desc:"E1 : Retour à Ste FOY pour une opération maintien IMPOSSIBLE (l'équipe est dernière de D1)",
        link:"https://www.youtube.com/watch?v=ymuFO-myE_Q"
    },
    {
        img:"https://img.youtube.com/vi/aZtN8SrO4gY/maxresdefault.jpg",
        date:"20 Mai 2023",
        role:"Pieds Carrés",
        desc:"E28 : Mon DERNIER match à St Foy. Bagarre, record, cartons, il ne faut PAS gâcher la fête",
        link:"https://www.youtube.com/watch?v=aZtN8SrO4gY"
    }
]

export const contact = [
    {
        "role": "PRESIDENT",
        "name": "FABIEN MEZARD",
        "mail": null,
        "phone": null
    },
    {
        "role": "PRÉSIDENT DÉLÉGUÉ",
        "name": "LUCAS FERNOUX",
        "mail": null,
        "phone": null
    },
    {
        "role": "VICE-PRESIDENT",
        "name": "HOSNI SASSI",
        "mail": "hosnisassi.1905@gmail.com",
        "phone": null
    },
    {
        "role": "SECRETAIRE GENERALE",
        "name": "ELISABETH PATO PICHARD",
        "mail": null,
        "phone": null
    },
    {
        "role": "VICE-SECRETAIRE",
        "name": "LOREM IPSUM",
        "mail": null,
        "phone": null
    },
    {
        "role": "TRESORIER",
        "name": "DOMINIQUE VINDRY",
        "mail": null,
        "phone": null
    },
    {
        "role": "TRESORIÈRE ADJOINTE",
        "name": "FABIENNE HENDRICKX",
        "mail": null,
        "phone": null
    },
    {
        "role": "CORRESPONDANT",
        "name": "MIREILLE SINA",
        "mail": null,
        "phone": null
    },
    {
        "role": "COORDINATEUR FOOT À 11",
        "name": "LOREM IPSUM",
        "mail": null,
        "phone": null
    },
    {
        "role": "CORDINATEUR FOOT ANIMATION / ÉCOLE DE FOOT",
        "name": "LOREM IPSUM",
        "mail": null,
        "phone": null
    },
    {
        "role": "COORDINATEUR FOOT LOISIR",
        "name": "LOREM IPSUM",
        "mail": null,
        "phone": null
    },
    {
        "role": "REFERENT TOURNOI",
        "name": "LOREM IPSUM",
        "mail": null,
        "phone": null
    },
    {
        "role": "REFERENT SECURITE",
        "name": "LUDOVIC PICHARD",
        "mail": null,
        "phone": null
    },
]

export const footer = [
    {
        title:"LIENS",
        footerLinks:[  
            {label:"Accueil", href:"/"},
            {label:"Boutique", href:"/shop"},
            {label:"Galerie Photo", href:"/photo"},
            {label:"Sponsoring", href:"/sponsoring"},
            {label:"Nous contacter", href:"/contact"},
        ]
    },
    {
        title:"PARTENAIRES",
        footerLinks:[
            {label:"OL", href:"/partenaire"},
            {label:"Crédit Mutuel", href:"/partenaire"},
            {label:"Région Auvergne Rhône Alpes", href:"/partenaire"},
        ]
    }
]
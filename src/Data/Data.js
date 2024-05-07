import {LiaHandshakeSolid} from "react-icons/lia";
import {PiGraphLight} from "react-icons/pi";
import {BsGraphUp, BsHeartPulse} from "react-icons/bs"

import img1 from "../assets/img-9.jpg"
import img5 from "../assets/yanis.webp"

import img6 from "../assets/noemie-lise.webp"
import img7 from "../assets/ludovic.webp"
import img8 from "../assets/sebastien.webp"

import mezard from "../assets/fabien-mezard.webp"
import sassi from "../assets/hosni-sassi.png"
import vindry from "../assets/dominique-vindry.webp"
import hendrickx from "../assets/fabienne-hendrickx.webp"
import pichard from "../assets/elisabeth-pichard.webp"
import fernoux from "../assets/lucas-fernoux.webp"



export const navLinks = [
    {label:"Accueil",href:"/"},
    {label:"Boutique",href:"#about"},
    {label:"Galerie Photo",href:"/"},
    {label:"Sponsoring",href:"/"},
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
        role:"Vice-Secrétaire Général",
        name:"Lucas FERNOUX"
    },
]

export const events =[
    {
        month:"5",
        date:"15/05/2025",
        titre:"Tournoi U11",
        time:"9h-16h"
    },
    {
        month:"5",
        date:"18/05/2025",
        titre:"Tournoi U7",
        time:"9h-16h"
    },
    {
        month:"5",
        date:"19/05/2025",
        titre:"Tournoi U9",
        time:"9h-16h"
    },
    {
        month:"6",
        date:"02/06/2025",
        titre:"Tournoi U13",
        time:"9h-16h"
    },
    {
        month:"6",
        date:"16/06/2025",
        titre:"Tournoi Féminine",
        time:"9h-16h"
    },
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

export const footer = [
    {
        title:"LIENS",
        footerLinks:[  
            {link:"Accueil"},
            {link:"Boutique"},
            {link:"Galerie Photo"},
            {link:"Sponsoring"},
            {link:"Nous contacter"},
        ]
    },
    {
        title:"PARTENAIRES",
        footerLinks:[
            {link:"OL"},
            {link:"Crédit Mutuel"},
            {link:"Région Auvergne Rhône Alpes"},
        ]
    }
]
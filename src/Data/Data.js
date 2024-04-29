import {LiaHandshakeSolid} from "react-icons/lia";
import {PiGraphLight} from "react-icons/pi";
import {BsGraphUp, BsHeartPulse} from "react-icons/bs"

import img1 from "../assets/img-9.jpg"
import img5 from "../assets/img-12.jpg"

import img6 from "../assets/img-6.jpg"
import img7 from "../assets/img-7.jpg"
import img8 from "../assets/img-8.jpg"

import mezard from "../assets/fabien-mezard2.jpg"
import sassi from "../assets/hosni-sassi.jpg"
import vindry from "../assets/dominique-vindry.jpg"
import hendrickx from "../assets/fabienne-hendrickx.jpg"
import pichard from "../assets/elisabeth-pichard.jpg"
import fernoux from "../assets/lucas-fernoux.jpg"



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
        desc:'"Pour moi, le FC Sainte-Foy-lès-Lyon représente bien plus qu\'un simple club de football. En tant que fervente supportrice, je suis émue par l\'esprit d\'équipe et la passion qui animent nos équipes. Voir nos joueurs se battre sur le terrain avec autant de détermination est un véritable spectacle, et cela renforce notre lien avec le club et ses valeurs."',
        img:img5,
        clientName:"Manon",
        role: "Supportrice"
    },
    {
        id:2,
        desc:'"La détermination de nos athlètes à se dépasser est véritablement remarquable. En tant que coordinateur sportif du FC Sainte-Foy-lès-Lyon, je suis impressionné par leur engagement sans faille lors des entraînements et des matchs. C\'est un plaisir de les soutenir dans leur progression et de les voir s\'épanouir en tant que joueurs et individus."',
        img:img6,
        clientName:"Guillaume",
        role: "Coordinateur"
    },
    {
        id:3,
        desc:'"De la passion pour le football est née une véritable fierté pour notre communauté. En tant que fondateur du FC Sainte-Foy-lès-Lyon, je suis comblé de voir comment notre club est devenu un symbole d\'unité et de dynamisme pour toute la ville. Voir nos joueurs incarner nos valeurs sur et en dehors du terrain est une source de satisfaction sans pareille."',
        img:img7,
        clientName:"Robert",
        role: "Fondateur"
    },
    {
        id:4,
        desc:'"Chaque match est une nouvelle occasion de voir nos joueurs évoluer avec passion et détermination sur le terrain. En tant qu\'entraîneur du FC Sainte-Foy-lès-Lyon, je suis constamment inspiré par leur engagement envers le jeu et leur esprit d\'équipe. C\'est un honneur de faire partie de cette équipe dynamique et de contribuer à son succès."',
        img:img1,
        clientName:"Farès",
        role: "Entraineur"
    },
    {
        id:5,
        desc:'"Notre engagement collectif nous a permis de réaliser des progrès significatifs. En tant que membre du comité directeur du FC Sainte-Foy-lès-Lyon, je suis impressionné par la détermination et l\'implication de notre équipe dirigeante. C\'est un privilège de contribuer à l\'évolution de notre club et de voir nos efforts porter leurs fruits."',
        img:img8,
        clientName:"Sébastien",
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
        title:"Liens",
        footerLinks:[  
            {link:"Accueil"},
            {link:"Boutique"},
            {link:"Nous contacter"},
        ]
    },
    {
        title:"Partenaires",
        footerLinks:[
            {link:"OL"},
            {link:"Crédit Mutuel"},
            {link:"Région Auvergne Rhône Alpes"},
        ]
    }
]
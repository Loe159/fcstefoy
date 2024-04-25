import React from 'react'
import img from "../assets/fabien-mezard.jpg"

const About = () => {
  return (
    <section id='about' className=' w-screen min-h-screen'>
      <div className=' max-container flex justify-center items-center gap-24 padding-hero-y padding-x h-full max-xl:gap-7 max-lg:flex-col'>
        <div className=' flex-1 w-full'>
          <div className=' bg-[#d73523] flex justify-end pt-10 pl-10 max-sm:pt-5 max-sm:pl-5'>
            <img src={img} alt="aboutImg" className=' object-cover object-center w-full max-lg:w-full'/>
          </div>
        </div>

        <div className=' flex-1'>
          <p className=' relative before:absolute before:w-20 before:h-1 before:bg-[#d73523] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]'>MOT DU PRÉSIDENT</p>
        
          <div className=' my-7 text-5xl leading-[60px] font-semibold text-black max-xl:text-4xl max-xl:my-4 max-lg:my-7 max-lg:text-5xl max-lg:leading-[60px] max-sm:text-3xl'>
            <h1>FABIEN MEZARD</h1>
          </div>

          <p className='font text-lg text-slate-800 text-justify'>
            Guidés par une détermination inflexible et un engagement inébranlable, nous traçons notre chemin vers l'excellence avec une foi inégalée. Portés par l'esprit d'unité qui nous anime et la volonté constante de nous surpasser, chaque pas que nous faisons est un pas en avant vers la réalisation de nos ambitions les plus élevées. Nous exprimons notre sincère gratitude pour votre soutien indéfectible et votre engagement inconditionnel envers nos valeurs. C'est grâce à cette formidable solidarité que nous sommes en mesure d'accomplir de grandes choses ensemble.
          </p>
          <br/>
          <p className='font text-lg text-slate-800 text-justify'>
            Allez le FC Sainte Foy Lès Lyon ! Votre passion et votre dévouement sont le moteur qui propulse notre équipe vers de nouveaux sommets. Que notre chemin vers la victoire soit marqué par la persévérance, la camaraderie et l'esprit d'équipe qui caractérisent notre club. Ensemble, nous formons une force invincible. Ensemble, nous sommes prêts à relever tous les défis qui se dressent sur notre route, avec fierté et détermination. Merci de faire partie de cette extraordinaire aventure.
          </p>

        </div>
      </div>
    </section>
  )
}

export default About
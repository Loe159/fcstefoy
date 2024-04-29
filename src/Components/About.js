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
          <p className=' relative before:absolute before:w-20 before:h-1 before:bg-[#d73523] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]'>MOT
            DU PRÉSIDENT</p>

          <div
              className=' my-7 text-5xl leading-[60px] font-semibold text-black max-xl:text-4xl max-xl:my-4 max-lg:my-7 max-lg:text-5xl max-lg:leading-[60px] max-sm:text-3xl'>
            <h1>FABIEN MEZARD</h1>
          </div>

          <p className='font text-lg text-slate-800 text-justify'>
            "En ma qualité de président, c'est avec une immense fierté et un profond sentiment d'honneur que je prends la parole pour vous adresser mes mots les plus sincères. Notre club représente bien plus qu'une simple équipe de football ; il incarne un héritage, une passion partagée et une communauté unie par un même objectif : l'excellence. Guidés par une détermination inflexible et un engagement inébranlable, nous nous efforçons chaque jour de porter haut les couleurs de notre club, sur le terrain comme en dehors.
          </p>
          <br/>
          <p className='font text-lg text-slate-800 text-justify'>
            Que ce soit dans la victoire ou dans l'adversité, nous sommes solidaires, unis par notre amour pour le jeu et notre désir constant de nous améliorer. Je souhaite exprimer ma profonde gratitude à chacun d'entre vous pour votre soutien indéfectible et votre engagement inconditionnel envers nos valeurs. C'est grâce à cette formidable solidarité que nous sommes en mesure de réaliser de grandes choses ensemble, et je suis honoré de faire partie de cette extraordinaire aventure avec vous.
          </p>
          <br/>
          <p className='font text-lg text-slate-800 text-justify'>
            Allez le FC Sainte Foy Les Lyon !"
          </p>

        </div>
      </div>
    </section>
  )
}

export default About
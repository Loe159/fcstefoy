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
            En ma qualité de président, c'est avec fierté  que je prends la parole pour vous adresser ces quelques mots. Notre club représente bien plus que de simples équipes de football; il incarne un héritage, une passion partagée et une communauté unie par un même objectif : Progresser
          </p>
          <br/>
          <p className='font text-lg text-slate-800 text-justify'>
            Avec détermination, porté par  les valeurs de respect, de plaisir, de partage et de progrès moteur de notre engagement, nous nous efforçons chaque jour de porter haut les couleurs de notre club, sur le terrain comme en dehors.
          </p>
          <br/>
          <p className='font text-lg text-slate-800 text-justify'>
            Que ce soit dans la victoire ou dans l'adversité, nous sommes solidaires, unis par notre amour pour le jeu, notre désir constant de nous améliorer et notre volonté d'offrir à chacun la possibilité de pratiquer un football de qualité quel que soit son âge, son genre, ses origines ou ses capacités.
          </p>
          <br/>
          <p className='font text-lg text-slate-800 text-justify'>
            Une association, un club  n'est rien sans solidarité et l'engagement  de chacun de ses acteurs. Je suis honoré de contribuer avec vous à cette dynamique collective qui nous permettra  de réaliser de grandes choses tous ensemble.
          </p>
          <br/>
          <p className='font text-lg text-slate-800 text-justify'>
            Allez  Sainte Foy !
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
import React from 'react'
import { services } from '../Data/Data'


const Services = () => {
  return (
    <section id='services' className=' w-full min-h-screen bg-service-pattern bg-cover bg-fixed max-lg:bg-center max-sm:bg-center'>
      <div className=' max-container padding-hero-y padding-x'>
        <div className='flex justify-between items-end mb-28 max-lg:flex-col max-lg:items-start max-lg:gap-5 max-sm:mb-20'>
          <div>
            <p className=' text-white relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]'>NOS VALEURS</p>
            <div className=' text-6xl text-white mt-8 leading-[60px] font-semibold max-xl:text-4xl max-lg:text-5xl max-lg:leading-[60px] max-lg:max-w-[100%] max-sm:text-3xl'>
              <h1>UNIS PAR LA PASSION</h1>
            </div>
          </div>
        </div>

        <div className=' grid grid-cols-4 cursor-pointer gap-10 place-items-center overflow-hidden max-xl:grid-cols-2 max-sm:grid-cols-1'>
          {services.map((val)=>(
            <div key={val.label} className=' relative group min-h-[350px] pt-20 pb-9 w-full text-center flex flex-col items-center justify-center max-xl:pt-16 text-white'>
              <div>
                <p className=' flex justify-center mb-10 text-5xl'>{val.icon}</p>
                <p className=' text-4xl mb-5'>{val.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
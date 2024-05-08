import React from 'react'
import {Link} from "react-router-dom";

const Offer = () => {
  return (
    <section className=' w-full bg-[#1b5ba3]'>
      <div className=' max-container flex justify-between items-center text-white py-28 max-lg:py-24 max-md:flex-col max-md:items-start max-md:gap-5 max-md:py-16 max-sm:py-12 padding-x'>
        <div className=' text-6xl font-semibold leading-[70px] max-lg:text-4xl max-w-[75%] max-lg:max-w-[100%] max-sm:text-3xl'>
          <h1>Pour un style incomparable 👌🏻</h1>
        </div>

          <Link to={"shop"} className=' py-4 px-9 text-xl group relative text-white bg-[#d73523] rounded-sm font-semibold'>
            <div className=' buttonDiv'></div>
            <span className='buttonSpan'>Explorez notre boutique</span>
          </Link>
      </div>
    </section>
  )
}

export default Offer
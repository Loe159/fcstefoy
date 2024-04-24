import React, { useState } from 'react'
import {events} from "../Data/Data";
const TimeSchedule = () => {

  const [active,setActive] = useState("1")

  return (
    <section id='schedule' className=' w-full'>
      <div className=' max-container padding-hero-y padding-x'>
      <p className=' text-[#f04e3c] relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%] text-center w-fit m-auto max-sm:before:w-16 max-sm:pl-20'>Nos évènements</p>

      <div className=' max-w-[40%] m-auto text-6xl font-semibold leading-[70px] mt-5 mb-20 text-center max-lg:text-5xl max-lg:leading-[50px] max-md:max-md:max-w-[100%] max-sm:text-3xl'>
        <h1>2024/2025</h1>
      </div>

      <div className=' grid grid-cols-5 max-w-[1130px] m-auto gap-2 max-lg:grid-cols-4 max-sm:grid-cols-2'>
          <button onClick={()=>setActive("9")} className={`${active === "9" ? "bg-[#f03821] text-white" : 'bg-gray-50'} py-4 px-4 text-2xl font-semibold max-lg:py-3 max-lg:px-2 max-sm:text-lg`}>Septembre</button>
          <button onClick={()=>setActive("10")} className={`${active === "10" ? "bg-[#f03821] text-white" : 'bg-gray-50'} py-4 px-4 text-2xl font-semibold max-lg:py-3 max-lg:px-2 max-sm:text-lg`}>Octobre</button>
          <button onClick={()=>setActive("11")} className={`${active === "11" ? "bg-[#f03821] text-white" : 'bg-gray-50'} py-4 px-4 text-2xl font-semibold max-lg:py-3 max-lg:px-2 max-sm:text-lg`}>Novembre</button>
          <button onClick={()=>setActive("12")} className={`${active === "12" ? "bg-[#f03821] text-white" : 'bg-gray-50'} py-4 px-4 text-2xl font-semibold max-lg:py-3 max-lg:px-2 max-sm:text-lg`}>Décembre</button>
          <button onClick={()=>setActive("1")} className={`${active === "1" ? "bg-[#f03821] text-white" : 'bg-gray-50'} py-4 px-4 text-2xl font-semibold max-lg:py-3 max-lg:px-2 max-sm:text-lg`}>Janvier</button>
          <button onClick={()=>setActive("2")} className={`${active === "2" ? "bg-[#f03821] text-white" : 'bg-gray-50'} py-4 px-4 text-2xl font-semibold max-lg:py-3 max-lg:px-2 max-sm:text-lg`}>Février</button>
          <button onClick={()=>setActive("3")} className={`${active === "3" ? "bg-[#f03821] text-white" : 'bg-gray-50'} py-4 px-4 text-2xl font-semibold max-lg:py-3 max-lg:px-2 max-sm:text-lg`}>Mars</button>
          <button onClick={()=>setActive("4")} className={`${active === "4" ? "bg-[#f03821] text-white" : 'bg-gray-50'} py-4 px-4 text-2xl font-semibold max-lg:py-3 max-lg:px-2 max-sm:text-lg`}>Avril</button>
          <button onClick={()=>setActive("5")} className={`${active === "5" ? "bg-[#f03821] text-white" : 'bg-gray-50'} py-4 px-4 text-2xl font-semibold max-lg:py-3 max-lg:px-2 max-sm:text-lg`}>Mai</button>
          <button onClick={()=>setActive("6")} className={`${active === "6" ? "bg-[#f03821] text-white" : 'bg-gray-50'} py-4 px-4 text-2xl font-semibold max-lg:py-3 max-lg:px-2 max-sm:text-lg`}>Juin</button>
      </div>

      <div className=' grid grid-cols-5 gap-4 w-[80%] mt-10 max-xl:w-[100%] max-lg:grid-cols-2 max-sm:grid-cols-1 m-auto duration-300'>

          {events.map((val)=> (
                  <div
                      className={`${active === val.month ? "block" : "hidden"} group hover:bg-[#f03821] bg-gray-50 shadow px-6 py-10 text-center h-[250px] max-lg:h-[270px] max-sm:h-[250px]`}>
                      <p className={` text-lg bg-black group-hover:bg-white group-hover:text-black text-center max-w-[80%] m-auto py-1 mt-4 max-lg:max-w-[35%] text-white`}>{val.date}</p>
                      <h1 className={`text-black mt-5 group-hover:text-white text-3xl`}>{val.titre}</h1>
                      <p className={` text-black group-hover:text-white text-lg`}><span
                          className={`text-slate-500 group-hover:text-white`}>{val.time}</span></p>
                  </div>
              ))}
      </div>
      </div>
    </section>
  )
}

export default TimeSchedule
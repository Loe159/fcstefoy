import React, { useState } from 'react'
import {teams} from "../Data/Data";
const Scores = () => {

  const [active,setActive] = useState("5")

  return (
    <section id='schedule' className=' w-full'>
      <div className=' max-container padding-hero-y padding-x'>
      <div className=' grid grid-cols-5 max-w-[1130px] m-auto gap-2 max-lg:grid-cols-4 max-sm:grid-cols-2'>
          {teams.map((team, index) => (
              <button onClick={() => setActive(index)}
                      className={`${active === index ? "bg-[#d73523] text-white" : 'bg-gray-50'} py-4 px-4 text-2xl font-semibold max-lg:py-3 max-lg:px-2 max-sm:text-lg`}>{team.name}</button>
          ))}
      </div>

          <iframe id={teams[active].widget} height="1000" width={"100%"}
                  src={"https://v1.scorenco.com/widget/"+teams[active].widget}></iframe>
      </div>
    </section>
  )
}

export default Scores
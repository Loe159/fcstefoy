import React from 'react'
import img from "../assets/img-6.jpg"

const About = () => {
  return (
    <section id='about' className=' w-screen min-h-screen'>
      <div className=' max-container flex justify-center items-center gap-24 padding-hero-y padding-x h-full max-xl:gap-7 max-lg:flex-col'>
        <div className=' flex-1 w-full'>
          <div className=' bg-[#f03821] flex justify-end pt-10 pl-10 max-sm:pt-5 max-sm:pl-5'>
            <img src={img} alt="aboutImg" className=' object-cover object-center w-full max-lg:w-full'/>
          </div>
        </div>

        <div className=' flex-1'>
          <p className=' text-[#f04e3c] relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]'>MOT DU PRÉSIDENT</p>
        
          <div className=' my-7 text-5xl leading-[60px] font-semibold text-black max-xl:text-4xl max-xl:my-4 max-lg:my-7 max-lg:text-5xl max-lg:leading-[60px] max-sm:text-3xl'>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
          </div>

          <p className='font text-lg text-slate-800'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, blanditiis dicta enim harum id in ipsam labore magni minima obcaecati pariatur possimus quas qui quo rerum similique suscipit vitae voluptatum.
          </p>

          <p className=' font text-lg text-slate-500 mt-5 mb-14  max-xl:mb-8'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis cumque cupiditate deserunt distinctio doloribus facere fugiat id ipsa ipsam, laborum nemo nihil perspiciatis praesentium quaerat quibusdam veritatis vitae voluptate?
          </p>

        </div>
      </div>
    </section>
  )
}

export default About
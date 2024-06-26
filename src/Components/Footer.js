import React from 'react'
import { footer } from '../Data/Data'
import logo from "../assets/logo.png"

import {BsFacebook} from "react-icons/bs"
import {BsInstagram, BsTiktok} from "react-icons/bs"

import {TbArrowBigUpFilled} from "react-icons/tb"
import {Link} from "react-router-dom";


const Footer = ({nav}) => {

  const date = new Date().getFullYear()

  return (
    <section className=' text-white min-h-[65vh] w-full bg-footer-pattern bg-center bg-cover bg-no-repeat'>
        {nav ? <a href="#"><div className=' bg-black w-14 h-14 fixed right-10 bottom-10 text-2xl flex justify-center items-center rounded-full cursor-pointer '><TbArrowBigUpFilled /></div></a>  : ""}
      <div className='max-container flex justify-around padding-hero-y px-20max-sm:px-10 flex-wrap gap-10'>
        {footer.map((val)=>(
          <div key={val.title}>  
            <h1 className=' text-2xl font-medium mb-8'>{val.title}</h1>
              {val.footerLinks.map((li)=>(
                <ul key={li.label} className=' mb-3'>
                  <li className=' text-xl tracking-wide text-gray-400 font font-thin hover:translate-x-1 duration-300'><Link to={li.href}>{li.label}</Link></li>
                </ul>
              ))}
          </div>
        ))}

        <div>
          <Link to="/" className=' font-semibold text-5xl flex items-center gap-1 text-white'>
            <img src={logo} alt="logo" width={160}/>
          </Link>


          <div className='flex items-center gap-6 cursor-pointer text-2xl mt-[35px] text-slate-200 max-sm:text-xl'>
            <a target={"_blank"} rel={"noreferrer"} href="https://www.tiktok.com/@fcsaintefoyleslyon"><BsTiktok className=' hover:-scale-x-110 duration-300'/></a>
            <a target={"_blank"} rel={"noreferrer"} href="https://www.facebook.com/SainteFoyLesLyonFootballClub"><BsFacebook className=' hover:-scale-x-110 duration-300'/></a>
            <a target={"_blank"} rel={"noreferrer"} href="https://www.instagram.com/fcstefoyleslyon/"><BsInstagram className=' hover:-scale-x-110 duration-300' /></a>
          </div>
        </div>
      </div>

      <div className=' border-t border-[#3e3e3e] max-container pt-10 pb-16 text-[#c4c4c4] text-center px-4'>
        <p className=' font'>Copyright &copy;{date}</p>
      </div>
    </section>
  )
}

export default Footer
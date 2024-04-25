import React, { useRef } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {BsInstagram, BsTwitter} from "react-icons/bs";
import {FaGlobe} from "react-icons/fa6";
import {BiLogoFacebook} from "react-icons/bi";
import {teamMembers} from "../Data/Data";
import {Navigation} from "swiper/modules";


const TeamMembers = () => {
  const sliderRef = useRef();

  return (
    <section className=' w-full min-h-screen'>
        <div className=' max-container padding-hero-y pb-0 padding-x'>
            <div
                className='flex justify-between items-end mb-28 max-md:flex-col max-md:items-start max-md:gap-5 max-md:mb-20'>
                <div>
                    <p className=' relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]'>NOTRE
                        ÉQUIPE</p>
                    <div className=' text-6xl text-black mt-8 leading-[60px] font-semibold max-sm:text-3xl'>
                        <h1>LE BUREAU DE L'ASSOCIATION</h1>
                    </div>
                </div>
            </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    ref={sliderRef}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        500: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1000: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                    }}
                >
                    {teamMembers.map((val) => (
                        <SwiperSlide key={val.name} className='group relative overflow-hidden'>
                            <div className={"h-[500px] w-full bg-no-repeat bg-cover"}
                                 style={{"background-image": "linear-gradient(to top, rgba(0, 0, 0, .9), transparent), url(" + val.img + ")"}}>
                                <div
                                    className='absolute bottom-[-50px] duration-[.4s] group-hover:bottom-0 left-0 w-full group-hover:bg-[#f03821] p-7 pb-8'>
                                    <p className=' font mb-2 text-gray-300 relative before:absolute before:w-10 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-14 text-lg before:translate-y-[-50%] group-hover:text-white group-hover:before:bg-white'>{val.role}</p>
                                    <h1 className='font text-xl font-semibold text-white'>{val.name}</h1>

                                    <div className=' flex items-center gap-6 text-lg mt-[27px] text-white'>
                                        <BiLogoFacebook/>
                                        <BsTwitter/>
                                        <FaGlobe/>
                                        <BsInstagram/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </div>
    </section>
  )
}

export default TeamMembers
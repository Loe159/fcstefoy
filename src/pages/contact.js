import React from "react";
import Accordion from "../Components/Accordion";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {blog, teamMembers} from "../Data/Data";
import {Link} from "react-router-dom";

import {contact} from "../Data/Data";


const ContactUs = () => {
    return (
        <div className={"pt-32 bg-black w-full"}>
            <section className='w-full min-h-screen bg-white'>
                <div className=' max-container pt-24 padding-x'>
                    <div
                        className='flex justify-between items-end mb-10 max-md:flex-col max-md:items-start max-md:gap-5 max-md:mb-20'>
                        <div className={"w-full"}>
                            <p className=' relative before:absolute before:w-20 before:h-1 before:bg-[#d73523] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]'>FOIRE
                                AUX QUESTIONS</p>
                            <div className=' text-6xl text-black mt-8 leading-[60px] font-semibold max-sm:text-3xl'>
                                <h1>FAQ</h1>
                            </div>
                        </div>
                    </div>
                    <div className={'pb-24'}>
                        <Accordion/>
                    </div>
                    <div
                        className='flex justify-between items-end mb-10 max-md:flex-col max-md:items-start max-md:gap-5 max-md:mb-20'>
                        <div className={"w-full"}>
                            <p className=' relative before:absolute before:w-20 before:h-1 before:bg-[#d73523] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]'>CONTACTS</p>
                            <div className=' text-6xl text-black mt-8 leading-[60px] font-semibold max-sm:text-3xl'>
                                <h1>LES INSTALLATIONS DE F.C. STE FOY LES LYON</h1>
                            </div>
                        </div>
                    </div>
                    <div className={"flex gap-4"}>
                        <div className='w-full'>
                            <h4 className={"text-2xl font-semibold max-lg:py-3 max-lg:px-2 max-sm:text-lg"}>SIÈGE
                                SOCIAL</h4>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.9018509228426!2d4.786183976756744!3d45.73306311545877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebfb8f9d2bcf%3A0x6eeeb7717e7ac036!2sFC%20Sainte%20Foy%20Les%20Lyon!5e0!3m2!1sen!2sfr!4v1714835356891!5m2!1sen!2sfr"
                                style={{border: 0}} allowFullScreen="" loading="lazy"
                                className={"w-full h-80 py-5"}
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                            <h4 className={"text-2xl font-semibold max-lg:py-3 max-lg:px-2 max-sm:text-lg pb-10"}>16
                                ALLEE ALBAN VISTEL</h4>
                            <Link target={"_blank"} to={"https://maps.google.com/maps?ll=45.733059,4.788759&z=16&t=m&hl=en&gl=FR&mapclient=embed&cid=7993528086710370358"}
                                  className='font-semibold py-4 px-7 text-xl group relative text-white bg-[#d73523] rounded-sm'>
                                <div className=' buttonDiv'></div>
                                <span className='buttonSpan'>ITINÉRAIRE</span>
                            </Link>
                        </div>
                        <div className='w-full'>
                            <h4 className={"text-2xl font-semibold max-lg:py-3 max-lg:px-2 max-sm:text-lg"}>STADE DU
                                PLAN DU LOUP</h4>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.912472287172!2d4.7860520767567785!3d45.73285011547304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebfb8ecec02b%3A0x5a9c9bf485a0e6dd!2sStade%20Du%20Plan%20Du%20Loup!5e0!3m2!1sen!2sfr!4v1715964285872!5m2!1sen!2sfr"
                                style={{border: 0}} allowFullScreen="" loading="lazy"
                                className={"w-full h-80 py-5"}
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                            <h4 className={"text-2xl font-semibold max-lg:py-3 max-lg:px-2 max-sm:text-lg pb-10"}>
                                16 ALLEE ALBAN VISTEL</h4>
                            <Link to={"/contact"}
                                  className='font-semibold py-4 px-7 text-xl group relative text-white bg-[#d73523] rounded-sm'>
                                <div className=' buttonDiv'></div>
                                <span className='buttonSpan'>ITINÉRAIRE</span>
                            </Link>
                        </div>
                    </div>

                    <div
                        className='flex justify-between items-end mb-10 mt-28 max-md:flex-col max-md:items-start max-md:gap-5 max-md:mb-20'>
                        <div className={"w-full"}>
                            <div className=' text-6xl text-black mt-8 leading-[60px] font-semibold max-sm:text-3xl'>
                                <h1>LE STAFF DE F.C. STE FOY LES LYON</h1>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-10 max-md:grid-cols-1 mb-20'>
                        {contact.map((val) => (
                            <div key={val.name} className='group'>
                                <p className='font mb-2 relative font-semibold text-xl underline'>{val.role}</p>
                                <h1 className='font text-lg font-semibold'>{val.name}</h1>
                                <h2 className='font text-lg'><a className={"font text-lg"}
                                                                href={"mailto:" + val.mail}>{val.mail}</a></h2>
                                <h3 className='font text-lg'><a className={"font text-lg"}
                                                                href={"tel:" + val.phone}>{val.phone}</a></h3>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    )
};

export default ContactUs;
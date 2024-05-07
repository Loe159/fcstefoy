import React from "react";
import Accordion from "../Components/Accordion";


const ContactUs = () => {
    return (
        <div className={"pt-32 bg-black w-full"}>
        <section id='about' className=' w-screen min-h-screen bg-white'>
            <div className=' max-container flex items-stretch justify-center items-center gap-24 padding-hero-y padding-x h-full max-xl:gap-7 max-lg:flex-col'>
                <div className=' flex-1 flex flex-col'>
                    <p className='relative before:absolute before:w-20 before:h-1 before:bg-[#d73523] before:top-[50%] before:left-0 pl-24 before:translate-y-[-50%]  text-6xl mt-8 leading-[60px] font-semibold max-xl:text-4xl max-lg:text-5xl max-lg:leading-[60px] max-lg:max-w-[100%] max-sm:text-3xl mb-8'>CONTACTS</p>
                    <Accordion/>

                </div>
                <div className=' flex-1 w-full'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.9018509228426!2d4.786183976756744!3d45.73306311545877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebfb8f9d2bcf%3A0x6eeeb7717e7ac036!2sFC%20Sainte%20Foy%20Les%20Lyon!5e0!3m2!1sen!2sfr!4v1714835356891!5m2!1sen!2sfr"
                        style={{border:0}} allowFullScreen="" loading="lazy" className={"w-full h-full py-10"}
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
        </div>
    )
};

export default ContactUs;
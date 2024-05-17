import React from "react";
import Accordion from "../Components/Accordion";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {blog, teamMembers} from "../Data/Data";
import {Link} from "react-router-dom";

import {contact} from "../Data/Data";
import Scores from "../Components/Scores";


const Teams = () => {
    return (
        <div className={"pt-32 bg-black w-full"}>
            <section className='w-full min-h-screen bg-white'>
                <div className=' max-container padding-x'>
                    <div className={'pb-24'}>
                        <Scores/>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Teams;
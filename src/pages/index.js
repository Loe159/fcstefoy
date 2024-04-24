import HeroSection from "../Components/HeroSection";
import About from "../Components/About";
import Services from "../Components/Services";
import Client from "../Components/Client";
import Gallery from "../Components/Gallery";
import TeamMembers from "../Components/TeamMembers";
import Offer from "../Components/Offer";
import TimeSchedule from "../Components/TimeSchedule";
import Blog from "../Components/Blog";
import React from "react";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <About/>
            <Services/>
            <Client/>
            <Gallery/>
            <TeamMembers/>
            <TimeSchedule/>
            <Offer/>
            <Blog/>
        </div>
    )
};

export default Home;
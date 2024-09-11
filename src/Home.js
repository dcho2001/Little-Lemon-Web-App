import React from "react";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import AboutUs from "./AboutUs";


const Home = () => {
    return(
        <main>
            <CallToAction></CallToAction>
            <Specials></Specials>
            <Testimonials></Testimonials>
            <AboutUs></AboutUs>
        </main>
    );
};

export default Home;
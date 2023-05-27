import React from 'react';
// Pages Components
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import FaqSection from "../components/FaqSection";

function AboutUs(props) {
    return (
        <>
            <AboutSection/>
            <WhyChooseUs/>
            <FaqSection/>
        </>
    );
}

export default AboutUs;
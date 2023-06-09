import React from 'react';
import home1 from "../img/home1.png"
// Styled
import styled from "styled-components";
import {
    StyledAbout,
    StyledDescription,
    StyledImage,
    StyledHide
} from "../styles";

function AboutSection(props) {
    return (
        <StyledAbout>
            <StyledDescription>
                <div className='title'>
                    <StyledHide>
                        <h2>We work to make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>your <span>dreams</span> come</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>true.</h2>
                    </StyledHide>
                </div>
                <p>Contact us for any photography or videography ideas that you have. We transform
                    your cherished memories into timeless pieces of art.
                </p>
                <button>
                    Contact Us
                </button>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt='guys with a camera'/>
            </StyledImage>
        </StyledAbout>
    );
}
export default AboutSection;
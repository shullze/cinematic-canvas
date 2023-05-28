import React from 'react';
// Import Icons
import clock from "../img/clock.svg"
import diaphragm from "../img/diaphragm.svg"
import money from "../img/money.svg"
import teamwork from "../img/teamwork.svg"
//Import Image
import home2 from "../img/home2.png"
//Styles
import {
    StyledAbout,
    StyledDescription,
    StyledImage
} from "../styles";
import styled from "styled-components";

function WhyChooseUs(props) {
    return (
        <StyledWhyChooseUs>
            <StyledDescription>
                <h2>
                    High <span>quality</span> services
                </h2>
                <StyledCards>
                    <StyledCard>
                        <div className='icon'>
                            <img src={clock} alt='clock'/>
                            <h3>Efficient</h3>
                        </div>
                            <p>
                                We capture and deliver stunning photography and videography content swiftly and
                                efficiently.
                            </p>
                    </StyledCard>
                    <StyledCard>
                        <div className='icon'>
                            <img src={teamwork} alt='clock'/>
                            <h3>Teamwork</h3>
                        </div>
                            <p>
                                Our photography and cinematography services are powered by a team of passionate
                                professionals.
                            </p>
                    </StyledCard>
                    <StyledCard>
                        <div className='icon'>
                            <img src={diaphragm} alt='diaphragm'/>
                            <h3>Creativity</h3>
                        </div>
                            <p>
                                We thrive on innovation and out of the box thinking, providing distinctly creative
                                solutions that ensure every image is unique and impactful.
                            </p>
                    </StyledCard>
                    <StyledCard>
                        <div className='icon'>
                            <img src={money} alt='money'/>
                            <h3>Affordable</h3>
                        </div>
                            <p>
                                High-quality services tailored to your needs at budget-friendly prices, offering
                                unbeatable value without compromising on excellence.
                            </p>
                    </StyledCard>
                </StyledCards>
            </StyledDescription>
            <StyledImage>
               <img src={home2} alt='camera'/>
            </StyledImage>
        </StyledWhyChooseUs>
    );
}


const StyledWhyChooseUs = styled(StyledAbout)`
  h2{
    padding-bottom: 5rem;
  }
  p{
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`

const StyledCard = styled.div`
  flex-basis: 20rem;
  .icon{
    display: flex;
    align-items: center;
    h3{
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`

export default WhyChooseUs;
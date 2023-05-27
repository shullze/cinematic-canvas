import React from 'react';
import home1 from "../img/home1.png"

function AboutSection(props) {
    return (
        <div>
            <div className='description'>
                <div className='title'>
                    <div className='hide'>
                        <h2>We work to make</h2>
                    </div>
                    <div className='hide'>
                        <h2>your <span>dreams</span> come</h2>
                    </div>
                    <div className='hide'>
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact us for any photography or videography ideas that you have. We transform
                    your cherished memories into timeless pieces of art.
                </p>
                <button>
                    Contact Us
                </button>
            </div>
            <div className='imgage'>
                <img src={home1} alt='guys with a camera'/>
            </div>
        </div>
    );
}

export default AboutSection;
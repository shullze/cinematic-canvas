import React from 'react';
// Import Icons
import clock from "../img/clock.svg"
import diaphragm from "../img/diaphragm.svg"
import money from "../img/money.svg"
import teamwork from "../img/teamwork.svg"
//Import Image
import home2 from "../img/home2.png"

function WhyChooseUs(props) {
    return (
        <div className='services'>
            <div className='description'>
                <h2>
                    High <span>quality</span> services
                </h2>
                <div className='cards'>
                    <div className='card'>
                        <div className='icon'>
                            <img src={clock} alt='clock'/>
                            <h3>Efficient</h3>
                            <p>
                                We capture your precious moments with stunning photography and cinematography,
                                delivering your visual narrative with the speed of life. At our company, your
                                memories don't wait. We pride ourselves on our swift, efficient service, ensuring
                                that your beautifully crafted images and films are ready by the next day. Your story
                                deserves to be told without delay. We capture today; you relive it tomorrow.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                            <img src={teamwork} alt='clock'/>
                            <h3>Teamwork</h3>
                            <p>
                                Our photography and cinematography services are powered by a team of passionate
                                professionals. Together, we blend our talents to bring your story to life, working
                                collaboratively to ensure every frame captures your unique vision. With us, you're not
                                just hiring a service, you're joining a team dedicated to creating your masterpiece.
                                Your story is our mission, and together, we create magic.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                            <img src={diaphragm} alt='diaphragm'/>
                            <h3>Creativity</h3>
                            <p>
                                At the heart of our photography and cinematography services lies a boundless well of
                                creativity. We see beyond the lens, transforming ordinary moments into extraordinary
                                visual narratives. Our approach blends technical expertise with artistic innovation
                                to create compelling stories that stand out. Experience the magic of storytelling with
                                us, where every frame is a testament to our creative spirit.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='icon'>
                            <img src={money} alt='money'/>
                            <h3>Affordable</h3>
                            <p>
                                Experience the magic of professional photography and cinematography without breaking
                                the bank. Our mission is to make high-quality visual storytelling accessible to everyone.
                                With our affordable rates, everyone can enjoy the luxury of having their precious
                                moments beautifully captured. Extraordinary memories shouldn't come with an extravagant
                                price tag. Capture your story with us, where quality meets affordability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={home2} alt='camera'/>
        </div>
    );
}


export default WhyChooseUs;
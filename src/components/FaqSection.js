import React from 'react';

function FaqSection(props) {
    return (
        <div className='faq'>
            <h2>Shuttering Doubts <span>FAQs</span></h2>
            <div className='question'>
                <h4>How do I book your photography or videography services?</h4>
                <div className='answer'>
                    <p>
                        We appreciate a proactive approach from our clients. To secure a slot for our services,
                        please contact us through our online form or call us directly. We'll then discuss your needs,
                        schedule, and the creative aspects of your project.
                    </p>
                </div>
            </div>
            <div className='question'>
                <h4>What photography and videography equipment do you use?</h4>
                <div className='answer'>
                    <p>
                        Our team utilizes cutting-edge photography and videography equipment to ensure your visuals are
                        of the highest quality. This includes professional-grade cameras, lenses, lighting systems, and
                        post-production software.
                    </p>
                </div>
            </div>
            <div className='question'>
                <h4>Can I specify a particular style or theme for my photos or video?</h4>
                <div className='answer'>
                    <p>
                        Absolutely. We highly value the creative input of our clients. During our consultation, we will
                        discuss your vision in detail to ensure that our creative direction aligns with your
                        expectations.
                    </p>
                </div>
            </div>
            <div className='question'>
                <h4>How soon can I expect to receive my photos or video after the shoot?</h4>
                <div className='answer'>
                    <p>
                        In our commitment to efficiency and client satisfaction, we guarantee next-day delivery of all
                        our work. This allows you to promptly enjoy, share, or use your high-quality photos or videos.
                    </p>
                </div>
            </div>
            <div className='question'>
                <h4>What is your cancellation and rescheduling policy?</h4>
                <div className='answer'>
                    <p>
                        We understand that unexpected events may require changes to your schedule. For details on our
                        flexible cancellation and rescheduling policies, please contact us directly. We aim to
                        accommodate your needs while maintaining a productive schedule for our team.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FaqSection;
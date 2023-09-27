import React from 'react';
import aboutcontact from '../../../assets/images/shapes/cta-bg-2.png'
const AboutContact = () => {
    const aboutcontactShapesbg = {
        backgroundImage: `url(${aboutcontact}))`,
        backgroundSize : 'cover',
        backgrouondRepeat: 'no-repeat',
        width: '100%',
        height: '100%'

    }
    return (
        <div>
              <section class="cta-two cta-two-about">
                <div class="container">
                    <div class="cta-two__info-top wow fadeInUp" data-wow-delay="200ms">
                        <div class="cta-two__bg" style={aboutcontactShapesbg}></div>
                        <div class="section-title">
                            <h2 class="section-title__title">
                                Let’s start working together.
                                <br/>
                                Get in touch with us!
                            </h2>
                        </div>
                        {/* <!-- section-title --> */}
                        <a href="contact.html" class="cta-two__icon">
                            <span class="icon-long-arrow"></span>
                        </a>
                    </div>
                    <h5 class="cta-two__info-bottom wow fadeInDown" data-wow-delay="300ms">
                        or call us to get free quote:
                        <a href="tel:+9236809850"> +8801601082443</a>
                    </h5>
                </div>
            </section>
        </div>
    );
};

export default AboutContact;
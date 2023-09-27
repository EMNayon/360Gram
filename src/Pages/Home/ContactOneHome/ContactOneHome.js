import React from 'react';
import contactBg2 from '../../../assets/images/shapes/contact-bg-2.png'
const ContactOneHome = () => {
    const contactbg = {
        backgroundImage: `url(${contactBg2})`,
        backgroundSize: 'cover', // Image size set korte chaile
        backgroundRepeat: 'no-repeat', // Image repeat korte chaile
        width: '100px', // Width set korte chaile
        height: '100px', // Height set korte chaile
      };
    return (
        <div>
               <section class="contact-two">
                <div class="contact-two__bg" style={contactbg}></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 wow fadeInLeft" data-wow-delay="300ms">
                            <div class="section-title">
                                <div class="section-title__triangle">
                                    <span class="section-title__triangle-left"></span>
                                    <span class="section-title__triangle-right"></span>
                                </div>
                                <h5 class="section-title__tagline">contact with us</h5>
                                <h2 class="section-title__title">Let’s work together</h2>
                            </div>
                            {/* <!-- section-title --> */}
                            <div class="contact-two__box">
                                <div class="contact-two__box__icon">
                                    <span class="icon-phone-call"></span>
                                </div>
                                <h5 class="contact-two__box__title">Have question?</h5>
                                <p class="contact-two__box__text">Free
                                    <a href="tel:230009850">+23 (000)-9850</a>
                                </p>
                            </div>
                            {/* <!-- icon-box --> */}
                            <div class="contact-two__box">
                                <div class="contact-two__box__icon">
                                    <span class="icon-mailbox"></span>
                                </div>
                                <h5 class="contact-two__box__title">Send email</h5>
                                <p class="contact-two__box__text">
                                    <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                                </p>
                            </div>
                            {/* <!-- icon-box --> */}
                            <div class="contact-two__box">
                                <div class="contact-two__box__icon">
                                    <span class="icon-maps-and-flags"></span>
                                </div>
                                <h5 class="contact-two__box__title">Visit anytime</h5>
                                <p class="contact-two__box__text">30 broklyn golden street. New York</p>
                            </div>
                            {/* <!-- icon-box --> */}
                        </div>
                        <div class="col-lg-6">
                            <div class="contact-two__form-box wow fadeInRight" data-wow-delay="300ms">
                                <form action="assets/inc/sendemail.php" class="contact-two__form contact-form-validated" novalidate="novalidate">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="contact-two__input-box">
                                                <input type="text" placeholder="Your name" name="name"/>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="contact-two__input-box">
                                                <input type="email" placeholder="Email address" name="email"/>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="contact-two__input-box">
                                                <select class="selectpicker" aria-label="Default select example">
                                                    <option selected="">Select service</option>
                                                    <option value="1">Select service 01</option>
                                                    <option value="2">Select service 02</option>
                                                    <option value="3">Select service 03</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="contact-two__input-box text-message-box">
                                                <textarea name="message" placeholder="Write Comment"></textarea>
                                            </div>
                                            <div class="contact-two__btn-box">
                                                <button type="submit" class="nisoz-btn">
                                                    <span class="nisoz-btn__shape"></span>
                                                    <span class="nisoz-btn__shape"></span>
                                                    <span class="nisoz-btn__shape"></span>
                                                    <span class="nisoz-btn__shape"></span>
                                                    <span class="nisoz-btn__text">Send a message</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div class="result"></div>
                            </div>
                            <div class="contact-two__thumb wow fadeInUp" data-wow-delay="400ms">
                                {/* <img src="assets/images/resources/contact-3.png" alt="nisoz"/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactOneHome;
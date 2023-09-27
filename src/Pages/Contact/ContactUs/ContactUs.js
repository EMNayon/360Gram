import React from 'react';

const ContactUs = () => {
    return (
        <div>
              <section class="contact-one contact-page bg-black">
                <div class="container wow fadeInUp" data-wow-delay="300ms">
                    <div class="section-title text-center">
                        <div class="section-title__triangle">
                            <span class="section-title__triangle-left"></span>
                            <span class="section-title__triangle-right"></span>
                        </div>
                        <h5 class="section-title__tagline">contact with us</h5>
                        <h2 class="section-title__title text-white">feel free to get in
                            <br/> touch with me
                        </h2>
                    </div>
                    {/* <!-- section-title --> */}
                    <div class="contact-one__form-box  text-center">
                        <form action="assets/inc/sendemail.php" class="contact-one__form contact-form-validated" novalidate="novalidate">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="contact-one__input-box">
                                        <input type="text" placeholder="Your name" name="name"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="contact-one__input-box">
                                        <input type="email" placeholder="Email address" name="email"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="contact-one__input-box">
                                        <input type="text" placeholder="Phone" name="phone"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="contact-one__input-box">
                                        <select class="selectpicker" aria-label="Default select example">
                                            <option selected="">Select service</option>
                                            <option value="1">Select service 01</option>
                                            <option value="2">Select service 02</option>
                                            <option value="3">Select service 03</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="contact-one__input-box text-message-box">
                                        <textarea name="message" placeholder="Write Comment"></textarea>
                                    </div>
                                    <div class="contact-one__btn-box">
                                        <button type="submit" class="nisoz-btn">
                                            <span class="nisoz-btn__shape"></span>
                                            <span class="nisoz-btn__shape"></span>
                                            <span class="nisoz-btn__shape"></span>
                                            <span class="nisoz-btn__shape"></span>
                                            <span class="nisoz-btn__text text-white">Send a message</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="result"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
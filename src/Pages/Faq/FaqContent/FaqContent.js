import React from 'react';
import faq from '../../../assets/images/shapes/cta-bg-2.png'
const FaqContent = () => {
    const faqImage = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${faq})`,
        backgroundSize: 'cover', // Image size set korte chaile
        backgroundRepeat: 'no-repeat', // Image repeat korte chaile
        width: '100%', // Width set korte chaile
        height: '100%', // Height set korte chaile
    }
    return (
        <div>
                <section class="accrodion-one faq-page">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 wow fadeInLeft" data-wow-delay="200ms">
                        <div class="faq-page__help">
                            <div class="faq-page__help__icon"><span class="icon-phone-call-1"></span></div>
                            <h3 class="faq-page__help__title">Do you still<br/> have questions?</h3>
                            <p class="faq-page__help__text">Call Anytime<a href="tel:+9288009850">+92 (8800) - 9850</a></p>
                        </div>
                    </div>
                    <div class="col-xl-9 col-lg-8 wow fadeInRight" data-wow-delay="300ms">
                        <div class="accrodion-one__wrapper nisoz-accrodion" data-grp-name="nisoz-accrodion">
                            <div class="accrodion">
                                <div class="accrodion-title">
                                    <h4 className='text-white'>What happens to my data if I cancel?</h4>
                                </div>
                                <div class="accrodion-content">
                                    <div class="inner">
                                        <p>There are many variations of passages of available but the have suffered
                                            alteration in that some form by injected randomised words which don’t
                                            look even as slightly believable now.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accrodion active">
                                <div class="accrodion-title">
                                    <h4 className='text-white'>What are the different types of marketing solutions?</h4>
                                </div>
                                <div class="accrodion-content">
                                    <div class="inner">
                                        <p>There are many variations of passages of available but the have suffered
                                            alteration in that some form by injected randomised words which don’t
                                            look even as slightly believable now.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accrodion">
                                <div class="accrodion-title">
                                    <h4 className='text-white'>How often should i work on the digital marketing?</h4>
                                </div>
                                <div class="accrodion-content">
                                    <div class="inner">
                                        <p>There are many variations of passages of available but the have suffered
                                            alteration in that some form by injected randomised words which don’t
                                            look even as slightly believable now.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accrodion">
                                <div class="accrodion-title">
                                    <h4 className='text-white'>Are social media good for the business growth?</h4>
                                </div>
                                <div class="accrodion-content">
                                    <div class="inner">
                                        <p>There are many variations of passages of available but the have suffered
                                            alteration in that some form by injected randomised words which don’t
                                            look even as slightly believable now.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accrodion">
                                <div class="accrodion-title">
                                    <h4 className='text-white'>What activities are done in the development?</h4>
                                </div>
                                <div class="accrodion-content">
                                    <div class="inner">
                                        <p>There are many variations of passages of available but the have suffered
                                            alteration in that some form by injected randomised words which don’t
                                            look even as slightly believable now.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accrodion">
                                <div class="accrodion-title">
                                    <h4 className='text-white'>What is the most important thing in a designing?</h4>
                                </div>
                                <div class="accrodion-content">
                                    <div class="inner">
                                        <p>There are many variations of passages of available but the have suffered
                                            alteration in that some form by injected randomised words which don’t
                                            look even as slightly believable now.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accrodion">
                                <div class="accrodion-title">
                                    <h4 className='text-white'>What is the purpose of a UI / UX?</h4>
                                </div>
                                <div class="accrodion-content">
                                    <div class="inner">
                                        <p>There are many variations of passages of available but the have suffered
                                            alteration in that some form by injected randomised words which don’t
                                            look even as slightly believable now.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="cta-two cta-two-about pt-28">
            <div class="container">
                <div class="cta-two__info-top wow fadeInUp" data-wow-delay="200ms">
                    <div class="cta-two__bg" style={faqImage}></div>
                    <div class="section-title">
                        <h2 class="section-title__title">Let’s start working together.<br/> Get in touch with us!</h2>
                    </div>
                    <a href="contact.html" class="cta-two__icon"><span class="icon-long-arrow"></span></a>
                </div>
                <h5 class="cta-two__info-bottom wow fadeInDown" data-wow-delay="300ms">
                    or call us to get free quote: <a href="tel:+9236809850">+92 (3680) 00 - 6800</a>
                </h5>
            </div>
        </section>
        </div>
    );
};

export default FaqContent;
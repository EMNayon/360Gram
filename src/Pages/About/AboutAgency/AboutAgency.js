import React from 'react';

const AboutAgency = () => {
    return (
        <div>
              <section class="about-four">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="about-four__thumb">
                                <div class="about-four__thumb__item wow fadeInUp" data-wow-delay="200ms">
                                    <img src="assets/images/resources/about-4-1.jpg" alt="nisoz"/>
                                </div>
                                <div class="about-four__thumb__item wow fadeInUp" data-wow-delay="300ms">
                                    <img src="assets/images/resources/about-4-2.jpg" alt="nisoz"/>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
                            <div class="about-four__content">
                                <div class="section-title">
                                    <div class="section-title__triangle">
                                        <span class="section-title__triangle-left"></span>
                                        <span class="section-title__triangle-right"></span>
                                    </div>
                                    
                                   <h5 class="section-title__tagline">About Agency</h5>

                                
                                  
                                   
                                    <h2 class="section-title__title text-white">get to know about the 360GRAM</h2>
                                </div>
                                {/* <!-- section-title --> */}
                                {/* <h3 class="about-four__content__heading">Proin est lacus, sagittis lobortis iaculise get.</h3> */}
                                <p class="about-four__content__text">
                                   360GRAM is a leading digital marketing agency in Bangladesh, offering comprehensive services in graphics design, content creation, social media advertising, social media management, email marketing, influencer marketing, SEO, web development & design, product design & concept, branding & consulting and other digital marketing solutions.
                                </p>
                                <div class="about-one__progress">
                                    <h4 class="about-one__progress--title text-white">Website Designing</h4>
                                    <div class="about-one__progress--bar">
                                        <div class="about-one__progress--inner count-bar" data-percent="77%">
                                            <div class="about-one__progress--number count-text">77%</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /.skills-item --> */}
                                <a href="contact.html" class="nisoz-btn">
                                    <span class="nisoz-btn__shape"></span>
                                    <span class="nisoz-btn__shape"></span>
                                    <span class="nisoz-btn__shape"></span>
                                    <span class="nisoz-btn__shape"></span>
                                    <span class="nisoz-btn__text">Discover More</span>
                                </a>
                                {/* <!-- /.btn --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutAgency;
import React from 'react';

const Agency = () => {
    return (
        <div>
              <section className="about-three">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="about-three__thumb wow fadeInLeft" data-wow-delay="300ms">
                                {/*<!-- about thumb start --> */}
                                <div className="about-three__thumb__one">
                                    <img src="assets/images/resources/about-3-1.jpg" alt="nisoz"/>
                                    <div className="about-three__thumb__triangle">
                                        <span className="about-three__thumb__triangle-left"></span>
                                        <span className="about-three__thumb__triangle-right"></span>
                                    </div>
                                </div>
                                <div className="about-three__thumb__two nisoz-tilt" data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 5, "speed": 700, "scale": 1 }'>
                                    <img className='-ml-4' src="assets/images/resources/about-3-2.jpg" alt="nisoz"/>
                                </div>
                            </div>
                            {/*<!-- about thumb end --> */}
                        </div>
                        <div className="col-lg-5 wow fadeInRight" data-wow-delay="300ms">
                            <div className="about-three__content">
                                {/*<!-- about content start--> */}
                                <div className="section-title">
                                    <div className="section-title__triangle">
                                        <span className="section-title__triangle-left"></span>
                                        <span className="section-title__triangle-right"></span>
                                    </div>
                                    <h5 className="section-title__tagline text-white">Welcome to agency</h5>
                                    <h2 className="section-title__title text-white">are you ready to grow your business</h2>
                                </div>
                                {/*<!-- section-title --> */}
                                <p className="about-three__text  text-white">
                                    There are many variations of simply free text passages of available but the majority have
                                suffered alteration
                                in some form, by injected hum randomised words which don't slightly.
                                </p>
                                <div className="row">
                                    <div className="col-xl-5 col-md-6">
                                        <div className="about-three__box">
                                            <div className="about-three__box__icon">
                                                <span className="icon-development-1 text-white"></span>
                                            </div>
                                            <h4 className="about-three__box__title   text-white">Businesses
                                                <br/>Growth
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-md-6 mr-2">
                                        <div className="about-three__box about-three__box-ml10">
                                            <div className="about-three__box__icon">
                                                <span className="icon-social-media text-white"></span>
                                            </div>
                                            <h4 className="about-three__box__title text-white">Marketing
                                                <br/>Solution
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <ul className="about-three__lists">
                                    <li className='text-white'>
                                        <span className="fa fa-check-circle  text-white"></span>Refresing to get such a personal touch.
                                    </li>
                                    <li className='text-white'>
                                        <span className="fa fa-check-circle  text-white"></span>
                                        Duis aute irure dolor in reprehenderit in voluptate.
                                    </li>
                                </ul>
                                <a href="about.html" className="nisoz-btn ">
                                    <span className="nisoz-btn__shape"></span>
                                    <span className="nisoz-btn__shape"></span>
                                    <span className="nisoz-btn__shape"></span>
                                    <span className="nisoz-btn__shape"></span>
                                    <span className="nisoz-btn__text text-white">Discover More</span>
                                </a>
                                {/*<!-- /.btn --> */}
                            </div>
                            {/*<!-- about content end--> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Agency;
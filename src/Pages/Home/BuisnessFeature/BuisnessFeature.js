import React from 'react';

const BuisnessFeature = () => {
    return (
        <div>
             <section className="feature-three">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="300ms">
                            <div className="section-title">
                                <div className="section-title__triangle">
                                    <span className="section-title__triangle-left"></span>
                                    <span className="section-title__triangle-right"></span>
                                </div>
                                <h5 className="section-title__tagline text-white">business growth</h5>
                                <h2 className="section-title__title text-white">Ready to give a new
                                    <br/> business look
                                </h2>
                            </div>
                            {/* <!-- section-title --> */}
                            <h4 className="feature-three__heading">Proin est lacus, sagittis lobortis iaculise get.</h4>
                            <p className="feature-three__text">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                            alteration in some form,
                            by injected humour, or randomised words which don't look even slightly believable.
                            </p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="feature-three__box">
                                        <div className="feature-three__box__icon">
                                            <span className="icon-growth"></span>
                                        </div>
                                        <h5 className="feature-three__box__title text-white">Market Management</h5>
                                        <p className="feature-three__box__text">
                                            Lorem ipsum is not tex dolor sit amet, consectetur
                                        notted.
                                        </p>
                                    </div>
                                    {/* <!-- icon-box --> */}
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-three__box">
                                        <div className="feature-three__box__icon">
                                            <span className="icon-increment"></span>
                                        </div>
                                        <h5 className="feature-three__box__title text-white">Business Analysis</h5>
                                        <p className="feature-three__box__text">
                                            Lorem ipsum is not tex dolor sit amet, consectetur
                                        notted.
                                        </p>
                                    </div>
                                    {/* <!-- icon-box --> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="feature-three__circle nisoz-tilt" data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 20, "speed": 700, "scale": 1 }'>
                                        <h5 className="feature-three__circle__text">Explore marketing Services</h5>
                                    </div>
                                    {/* <!-- circle-box --> */}
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-three__thumb">
                                        <img src="assets/images/resources/feature-4.jpg" alt="nisoz"/>
                                    </div>
                                    {/* <!-- feature-image --> */}
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-three__thumb">
                                        <img src="assets/images/resources/feature-5.jpg" alt="nisoz"/>
                                    </div>
                                    {/* <!-- feature-image --> */}
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-three__circle feature-three__circle-two nisoz-tilt" data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 20, "speed": 700, "scale": 1 }'>
                                        <h5 className="feature-three__circle__text">Get a professional solutions</h5>
                                    </div>
                                    {/* <!-- circle-box --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BuisnessFeature;
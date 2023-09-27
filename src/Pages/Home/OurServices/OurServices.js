import React from 'react';
// import serviceBgShape3 from '../../../assets/images/shapes/service-bg-3.jpg'
const OurServices = () => {
    // const serviceBg3 = {
    //     backgroundImage: `url(${serviceBgShape3})`,
    //     backgroundSize: 'cover', // Image size set korte chaile
    //     backgroundRepeat: 'no-repeat', // Image repeat korte chaile
    //     width: '100px', // Width set korte chaile
    //     height: '100px', // Height set korte chaile
    //   };
    return (
        <div style={{overflow:'hidden'}}>
            <section className="service-three"  >
                <div className="service-three__bg"></div>
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay="100ms">
                        <div className="col-md-7">
                            <div className="section-title">
                                <div className="section-title__triangle">
                                    <span className="section-title__triangle-left"></span>
                                    <span className="section-title__triangle-right"></span>
                                </div>
                                <h5 className="section-title__tagline text-white">our services</h5>
                                <h2 className="section-title__title text-white">what we’re offering to
                                    <br/> our customers
                                </h2>
                            </div>
                            {/*<!-- section-title --> */}
                        </div>
                        <div className="col-md-5">
                            <p className="service-three__text text-white">
                                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut
                            labore et simply free text dolore magna aliqua lonm andhn.
                            </p>
                        </div>
                    </div>
                    <div className="row service-three__cus-row">
                        <div className="col-lg-2 wow fadeInUp" data-wow-delay="200ms">
                            <div className="service-three__item text-center">
                                <div className="service-three__item__icon">
                                    <span className="icon-website-design"></span>
                                </div>
                                {/*<!-- /.service-icon --> */}
                                <h3 className="service-three__item__title">
                                    <a href="website-designing.html">UI / UX
                                        <br/> Creative Design
                                    </a>
                                </h3>
                                {/*<!-- /.service-title --> */}
                                <a className="service-three__item__more" href="website-designing.html">Find More</a>
                            </div>
                            {/*<!-- /.service-card-three --> */}
                        </div>
                        <div className="col-lg-2 wow fadeInUp" data-wow-delay="250ms">
                            <div className="service-three__item text-center">
                                <div className="service-three__item__icon">
                                    <span className="icon-website-development"></span>
                                </div>
                                {/*<!-- /.service-icon --> */}
                                <h3 className="service-three__item__title">
                                    <a href="website-development.html">Visual
                                        <br/> Graphic Design
                                    </a>
                                </h3>
                                {/*<!-- /.service-title --> */}
                                <a className="service-three__item__more" href="website-development.html">Find More</a>
                            </div>
                            {/*<!-- /.service-card-three --> */}
                        </div>
                        <div className="col-lg-2 wow fadeInUp" data-wow-delay="300ms">
                            <div className="service-three__item text-center">
                                <div className="service-three__item__icon">
                                    <span className="icon-digital-marketing"></span>
                                </div>
                                {/*<!-- /.service-icon --> */}
                                <h3 className="service-three__item__title">
                                    <a href="digital-marketing.html">Strategy
                                        <br/> & Marketing
                                    </a>
                                </h3>
                                {/*<!-- /.service-title --> */}
                                <a className="service-three__item__more" href="digital-marketing.html">Find More</a>
                            </div>
                            {/*<!-- /.service-card-three --> */}
                        </div>
                        <div className="col-lg-2 wow fadeInUp" data-wow-delay="400ms">
                            <div className="service-three__item text-center">
                                <div className="service-three__item__icon">
                                    <span className="icon-mobile-application"></span>
                                </div>
                                {/*<!-- /.service-icon --> */}
                                <h3 className="service-three__item__title">
                                    <a href="mobile-application.html">Content
                                        <br/> Writting Skills
                                    </a>
                                </h3>
                                {/*<!-- /.service-title --> */}
                                <a className="service-three__item__more" href="mobile-application.html">Find More</a>
                            </div>
                            {/*<!-- /.service-card-three --> */}
                        </div>
                        <div className="col-lg-2 wow fadeInUp" data-wow-delay="450ms">
                            <div className="service-three__item text-center">
                                <div className="service-three__item__icon">
                                    <span className="icon-monitor"></span>
                                </div>
                                {/*<!-- /.service-icon --> */}
                                <h3 className="service-three__item__title">
                                    <a href="website-designing.html">Web & App
                                        <br/> Development
                                    </a>
                                </h3>
                                {/*<!-- /.service-title --> */}
                                <a className="service-three__item__more" href="website-designing.html">Find More</a>
                            </div>
                            {/*<!-- /.service-card-three --> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurServices;
import React from 'react';
import  agencyBenifitisChoose from '../../../assets/images/shapes/choose.png'
const AgencyBenifits = () => {
    const choose = {
        backgroundImage: `url(${agencyBenifitisChoose})`,
        backgroundSize: 'cover', // Image size set korte chaile
        backgroundRepeat: 'no-repeat', // Image repeat korte chaile
        width: '100%', // Width set korte chaile
        height: '100%', // Height set korte chaile
        
      };

    return (
        <div>
             <section className="choose-two bg-black">
                <div className="choose-two__bg wow slideInRight" data-wow-delay="200ms"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 wow slideInLeft" data-wow-delay="200ms">
                            <div className="nisoz-stretch-element-inside-column">
                                <div className="choose-two__thumb">
                                    <img src="assets/images/resources/choose-2.jpg" alt="ogency"/>
                                    <div className="choose-two__content wow fadeInUp" style={choose} data-wow-delay="700ms">
                                        <div className="choose-two__content__icon">
                                            <span className="icon-trophy"></span>
                                        </div>
                                        <h4 className="choose-two__content__title">Award winning
                                            <br/> top level web
                                            <br/> agency
                                        </h4>
                                    </div>
                                    {/* <!-- choose-content --> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInUp bg-black" data-wow-delay="400ms">
                            <div className="section-title">
                                <div className="section-title__triangle">
                                    <span className="section-title__triangle-left"></span>
                                    <span className="section-title__triangle-right"></span>
                                </div>
                                <h5 className="section-title__tagline">agency benefits</h5>
                                <h2 className="section-title__title">why you should choose our 360GRAM agency</h2>
                            </div>
                            {/* <!-- section-title --> */}
                            <div className="choose-two__box">
                                <div className="choose-two__box__icon">
                                    <span className="icon-team"></span>
                                </div>
                                <h5 className="choose-two__box__title">the largest agency</h5>
                                <p className="choose-two__box__text text-black">
                                    Aenean placerat ut lacus nec simply free pulvinar. Donec eu leo,
                                ante at, commodo diam.
                                </p>
                            </div>
                            {/* <!-- icon-box --> */}
                            <div className="choose-two__box">
                                <div className="choose-two__box__icon">
                                    <span className="icon-good-quality"></span>
                                </div>
                                <h5 className="choose-two__box__title">high quality products</h5>
                                <p className="choose-two__box__text text-black">
                                    Aenean placerat ut lacus nec simply free pulvinar. Donec eu leo,
                                ante at, commodo diam.
                                </p>
                            </div>
                            {/* <!-- icon-box --> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AgencyBenifits;
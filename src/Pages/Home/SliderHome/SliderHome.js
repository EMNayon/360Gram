import React from 'react';
import sliderShape1 from '../../../assets/images/shapes/slider-3-bg-1.png'
// import sliderShape2 from '../../../assets/images/shapes/slider-3-shape-2.png'
import './SliderHome.css'
const SliderHome = () => {
    const divStyle1 = {
        backgroundImage: `url(${sliderShape1})`,
        backgroundSize: 'cover', // Image size set korte chaile
        backgroundRepeat: 'no-repeat', // Image repeat korte chaile
        width: '100px', // Width set korte chaile
        height: '100%', // Height set korte chaile
      };
  
    //   const divStyle2 = {
    //     backgroundImage: `url(${sliderShape2})`,
    //     backgroundSize: 'cover', // Image size set korte chaile
    //     backgroundRepeat: 'no-repeat', // Image repeat korte chaile
    //     width: '100px', // Width set korte chaile
    //     height: '99px', // Height set korte chaile
    //   };
    return (
        <div>
              <section className="main-slider-three">
                <div className="main-slider-three__carousel nisoz-owl__carousel owl-carousel" data-owl-options='{
		"loop": true,
		"animateOut": "slideOutDown",
		"animateIn": "fadeIn",
		"items": 1,
		"smartSpeed": 1000,
        "autoplay": true,
        "autoplayTimeout": 6000,
		"autoplayHoverPause": true,
		"nav": true,
        "navText": ["<span className=\"icon-up-arrow\"></span>","<span className=\"icon-down-arrow\"></span>"],
		"dots": false,
		"margin": 0
	    }'>
                    <div className="item">
                        {/* <!-- slider item start --> */}
                        <div className="main-slider-three__item">
                            {/* <!-- bg image start --> */}
                            <div className="main-slider-three__bg" style={divStyle1}></div>
                            {/* <!-- bg image end --> */}
                            <div className="main-slider-three__shape-1">
                                <img src="assets/images/shapes/slider-3-shape-1.png" alt="nisoz"/>
                            </div>
                            {/* <!-- shape-one --> */}
                            <div className="main-slider-three__shape-2">
                                <img src="assets/images/shapes/slider-3-shape-2.png" alt="nisoz"/>
                            </div>
                            {/* <!-- shape-one --> */}
                            <div className="main-slider-three__shape-3">
                                <img src="assets/images/shapes/slider-3-shape-3.png" alt="nisoz"/>
                            </div>
                            {/* <!-- shape-one --> */}
                            <div className="main-slider-three__shape-bg">
                                <img src="assets/images/backgrounds/slider-3-shape-1.jpg" alt="nisoz"/>
                            </div>
                            {/* <!-- shape-backgorund --> */}
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8">
                                        <div className="main-slider-three__content">
                                            <h5 className="main-slider-three__sub-title">Welcome to creative agency</h5>
                                            {/* <!-- slider-title --> */}
                                            <h2 className="main-slider-three__title">
                                                <span className="main-slider-three__title-anim">We’re Digital</span>
                                                <span className="main-slider-three__title-anim">Marketing</span>
                                                <span className="main-slider-three__title-anim">Agency</span>
                                            </h2>
                                            {/* <!-- slider-title --> */}
                                            <div className="main-slider-three__btn">
                                                <a href="about.html" className="nisoz-btn">
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__text">Discover More</span>
                                                </a>
                                                {/* <!-- /.btn --> */}
                                            </div>
                                            <div className="main-slider-three__arrow">
                                                <img src="assets/images/shapes/slider-3-border.png" alt="nisoz"/>
                                            </div>
                                            {/* <!-- /.arrow --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- slider item end --> */}
                    <div className="item">
                        {/* <!-- slider item start --> */}
                        <div className="main-slider-three__item">
                            {/* <!-- bg image start --> */}
                            <div className="main-slider-three__bg" style={divStyle1}></div>
                            {/* <!-- bg image end  */}
                            <div className="main-slider-three__shape-1">
                                <img src="assets/images/shapes/slider-3-shape-1.png" alt="nisoz"/>
                            </div>
                            {/* <!-- shape-one --> */}
                            <div className="main-slider-three__shape-2">
                                <img src="assets/images/shapes/slider-3-shape-2.png" alt="nisoz"/>
                            </div>
                            {/* <!-- shape-one --> */}
                            <div className="main-slider-three__shape-3">
                                <img src="assets/images/shapes/slider-3-shape-3.png" alt="nisoz"/>
                            </div>
                            {/* <!-- shape-one --> */}
                            <div className="main-slider-three__shape-bg">
                                <img src="assets/images/backgrounds/slider-3-shape-2.jpg" alt="nisoz"/>
                            </div>
                            {/* <!-- shape-backgorund --> */}
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8">
                                        <div className="main-slider-three__content">
                                            <h5 className="main-slider-three__sub-title">Welcome to creative agency</h5>
                                            {/* <!-- slider-title --> */}
                                            <h2 className="main-slider-three__title">
                                                <span className="main-slider-three__title-anim">We’re Digital</span>
                                                <span className="main-slider-three__title-anim">Marketing</span>
                                                <span className="main-slider-three__title-anim">Agency</span>
                                            </h2>
                                            {/* <!-- slider-title --> */}
                                            <div className="main-slider-three__btn">
                                                <a href="about.html" className="nisoz-btn">
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__text">Discover More</span>
                                                </a>
                                                {/* <!-- /.btn --> */}
                                            </div>
                                            <div className="main-slider-three__arrow">
                                                <img src="assets/images/shapes/slider-3-border.png" alt="nisoz"/>
                                            </div>
                                            {/* <!-- /.arrow --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- slider item end --> */}
                    <div className="item">
                        {/* <!-- slider item start --> */}
                        <div className="main-slider-three__item">
                            {/* <!-- bg image start --> */}
                            <div className="main-slider-three__bg" style=
                            {divStyle1}></div>
                            {/* <!-- bg image end --> */}
                            <div className="main-slider-three__shape-1">
                                <img src="assets/images/shapes/slider-3-shape-1.png" alt="nisoz"/>
                            </div>
                            {/* <!-- shape-one --> */}
                            <div className="main-slider-three__shape-2">
                                <img src="assets/images/shapes/slider-3-shape-2.png" alt="nisoz"/>
                            </div>
                            {/* <!-- shape-one --> */}
                            <div className="main-slider-three__shape-3">
                                <img src="assets/images/shapes/slider-3-shape-3.png" alt="nisoz"/>
                            </div>
                            {/* <!-- shape-one --> */}
                            <div className="main-slider-three__shape-bg">
                                <img src="assets/images/backgrounds/slider-3-shape-3.jpg" alt="nisoz"/>
                            </div>
                            {/* <!-- shape-backgorund --> */}
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8">
                                        <div className="main-slider-three__content">
                                            <h5 className="main-slider-three__sub-title">Welcome to creative agency</h5>
                                            {/* <!-- slider-title --> */}
                                            <h2 className="main-slider-three__title">
                                                <span className="main-slider-three__title-anim">We’re Digital</span>
                                                <span className="main-slider-three__title-anim">Marketing</span>
                                                <span className="main-slider-three__title-anim">Agency</span>
                                            </h2>
                                            {/* <!-- slider-title --> */}
                                            <div className="main-slider-three__btn">
                                                <a href="about.html" className="nisoz-btn">
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__shape"></span>
                                                    <span className="nisoz-btn__text">Discover More</span>
                                                </a>
                                                {/* <!-- /.btn --> */}
                                            </div>
                                            <div className="main-slider-three__arrow">
                                                <img src="assets/images/shapes/slider-3-border.png" alt="nisoz"/>
                                            </div>
                                            {/* <!-- /.arrow --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- slider item end --> */}
                </div>
            </section>
        </div>
    );
};

export default SliderHome;
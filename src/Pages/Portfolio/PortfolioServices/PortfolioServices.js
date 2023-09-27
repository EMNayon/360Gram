import React from 'react';

const PortfolioServices = () => {
    return (
        <div>
             <section class="portfolio-one portfolio-page">
                <div class="">
                    <div class="nisoz-owl__dots nisoz-owl__carousel owl-with-shadow owl-carousel" data-owl-options='{
            "items": 3,
            "margin": 30,
            "smartSpeed": 700,
            "loop":true,
            "autoplay": true,
            "center": true,
            "nav":false,
            "dots":true,
           
            "responsive":{
                "0":{
                    "items":1,
                    "margin": 0
                },
                "600":{
                    "items": 2
                },
                "992":{
                    "items": 3
                }
            }
            }'>
                        <div class="item">
                            <div class="portfolio-one__item">
                                <div class="portfolio-one__thumb">
                                    <img src="assets/images/portfolio/portfolio-3-1.jpg" alt="nisoz"/>
                                </div>
                                <div class="portfolio-one__hover">
                                    <a class="portfolio-one__read-more" href="portfolio-details.html">
                                        <span class="icon-right-arrow"></span>
                                    </a>
                                    <div class="portfolio-one__hover-bottom">
                                        <div class="portfolio-one__cats">
                                            <a href="portfolio.html">Creative</a>
                                        </div>
                                        <h3 class="portfolio-one__title">
                                            <a href="portfolio-details.html">Technology website development</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- folio-item --> */}
                        </div>
                        <div class="item">
                            <div class="portfolio-one__item">
                                <div class="portfolio-one__thumb">
                                    <img src="assets/images/portfolio/portfolio-3-2.jpg" alt="nisoz"/>
                                </div>
                                <div class="portfolio-one__hover">
                                    <a class="portfolio-one__read-more" href="portfolio-details.html">
                                        <span class="icon-right-arrow"></span>
                                    </a>
                                    <div class="portfolio-one__hover-bottom">
                                        <div class="portfolio-one__cats">
                                            <a href="portfolio.html">Creative</a>
                                        </div>
                                        <h3 class="portfolio-one__title">
                                            <a href="portfolio-details.html">Technology website development</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- folio-item --> */}
                        </div>
                        <div class="item">
                            <div class="portfolio-one__item">
                                <div class="portfolio-one__thumb">
                                    <img src="assets/images/portfolio/portfolio-3-3.jpg" alt="nisoz"/>
                                </div>
                                <div class="portfolio-one__hover">
                                    <a class="portfolio-one__read-more" href="portfolio-details.html">
                                        <span class="icon-right-arrow"></span>
                                    </a>
                                    <div class="portfolio-one__hover-bottom">
                                        <div class="portfolio-one__cats">
                                            <a href="portfolio.html">Creative</a>
                                        </div>
                                        <h3 class="portfolio-one__title">
                                            <a href="portfolio-details.html">Technology website development</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- folio-item --> */}
                        </div>
                        <div class="item">
                            <div class="portfolio-one__item">
                                <div class="portfolio-one__thumb">
                                    <img src="assets/images/portfolio/portfolio-3-4.jpg" alt="nisoz"/>
                                </div>
                                <div class="portfolio-one__hover">
                                    <a class="portfolio-one__read-more" href="portfolio-details.html">
                                        <span class="icon-right-arrow"></span>
                                    </a>
                                    <div class="portfolio-one__hover-bottom">
                                        <div class="portfolio-one__cats">
                                            <a href="portfolio.html">Creative</a>
                                        </div>
                                        <h3 class="portfolio-one__title">
                                            <a href="portfolio-details.html">Technology website development</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- folio-item --> */}
                        </div>
                    </div>
                    {/* <!-- slider-end --> */}
                </div>
            </section>
        </div>
    );
};

export default PortfolioServices;
import React, { useEffect } from 'react';
import PortfolioHeader from '../PortfolioHeader/PortfolioHeader';
import PortfolioServices from '../PortfolioServices/PortfolioServices'



const Portfolio = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

   
    return (
        <div>
            <PortfolioHeader></PortfolioHeader>

            {/* <PortfolioServices/> */}
            <div className='grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-6 py-12'>

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
        </div>
    );
};

export default Portfolio;
// import React, { useState } from "react";
import { useEffect } from "react";
import resubanner from "../../../../assets/images/resources/banner-author.png";
const ServicesAll = ({isShowTitle1, isShowTitle2,  isShowTitle3, isShowTitle4, isShowTitle5 , isShowTitle6, isShowTitle7, isShowTitle8}) => {
    
  const banner = {
    backgroundImage: `url(${resubanner})`,
    backgroundSize: "cover", // Image size set korte chaile
    backgroundRepeat: "no-repeat", // Image repeat korte chaile
    width: "100%", // Width set korte chaile
    height: "100%", // Height set korte chaile
  };

  useEffect(()=>{
    window.scrollTo(0, 0);
},[])
  return (
    <div>
      <section className="services-details">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-5 wow fadeInUp animated"
              data-wow-delay="300ms"
            >
              <div className="services-details__sidebar">
                {/* <div className="services-details__services-list">
                  <h3 className="services-details__services-title">All Services</h3>
                  <ul className="services-details__services list-unstyled">
                  <li>
                      <a href="website-designing.html">Graphics Design</a>
                    </li>
                    <li>
                      <a href="website-designing.html">Website Designing</a>
                    </li>
                    <li>
                      <a href="website-development.html">Website Development</a>
                    </li>
                    <li>
                      <a href="mobile-application.html">Mobile Application</a>
                    </li>
                    <li>
                      <a href="digital-marketing.html">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="social-marketing.html">Social Marketing</a>
                    </li>
                    <li>
                      <a href="seo-content.html">SEO & Content Writing</a>
                    </li>
                  </ul>
                </div> */}
                {/* <!-- /.service-widget --> */}
                <div className="services-details__banner">
                  <div
                    className="services-details__banner__image"
                    style={banner}
                  ></div>
                  <h3 className="services-details__banner__title">
                    Get a Free
                    <br /> Creative Web
                    <br />
                    Solutions
                  </h3>
                  <a href="contact.html" className="nisoz-btn">
                    <span className="nisoz-btn__shape"></span>
                    <span className="nisoz-btn__shape"></span>
                    <span className="nisoz-btn__shape"></span>
                    <span className="nisoz-btn__shape"></span>
                    <span className="nisoz-btn__text">Contact</span>
                  </a>
                  {/* <!-- /.btn --> */}
                </div>
                {/* <!-- /.service-widget --> */}
                <div className="services-details__document">
                  <div className="services-details__document__icon">
                    <span className="icon-pdf-file"></span>
                  </div>
                  <h3 className="services-details__document__title  text-white">
                    <a href="contact.html">Project agreement form</a>
                  </h3>
                  <p className="services-details__document__text">3.9KB</p>
                </div>
                {/* <!-- /.service-widget --> */}
              </div>
              {/* <!-- /.service-sidebar --> */}
            </div>
            {/* <!-- /.column --> */}
            <div
              className="col-xl-8 col-lg-7 wow fadeInUp animated"
              data-wow-delay="400ms"
            >
              <div className="services-details__content">
                <div className="services-details__thumb">

                 {isShowTitle1 ? ( <img src="assets/images/service/website-development.jpg" alt="nisoz"></img>): ('')}

                 {isShowTitle2 ? ( <img src="assets/images/service/website-development.jpg" alt="nisoz"></img>): ('')}


                 {isShowTitle3 ? (<img src="assets/images/service/mobile-application.jpg" alt="nisoz"></img>):('')}

                 {isShowTitle4 ? (<img src="assets/images/service/digital-marketing.jpg" alt="nisoz"></img>) : ('')}

                 
                 {isShowTitle5 ? (<img src="assets/images/service/social-marketing.jpg" alt="nisoz"></img>) :('')}

                 {isShowTitle6 ? ( <img src="assets/images/service/seo-content.jpg" alt="nisoz"></img>) : ('')}

                 {isShowTitle7 ? ( <img src="assets/images/service/website-development.jpg" alt="nisoz"></img>): ('')}

                 {isShowTitle8 ? ( <img src="assets/images/service/website-development.jpg" alt="nisoz"></img>): ('')}


                </div>

                {isShowTitle1 ? (<h3 className="services-details__content__title text-white">
                  GRAPHICS DESIGN
                </h3>): ('')}

                {isShowTitle2 ? (<h3 className="services-details__content__title  text-white">
                  UI/UX DESIGN
                </h3>): ('')}

                {isShowTitle3 ? (<h3 className="services-details__content__title  text-white">
                  CONTENT CREATION
                </h3>): ('')}

                {isShowTitle4 ? (<h3 className="services-details__content__title  text-white">
                  SOCIAL MEDIA ADVERTISING
                </h3>): ('')}

                {isShowTitle5 ? (<h3 className="services-details__content__title  text-white">
                  SEARC ENGINE OPTIMIZATION (SEO)
                </h3>): ('')}

                {isShowTitle6 ? (<h3 className="services-details__content__title  text-white">
                 EMAIL MARKETING
                </h3>): ('')}

                {isShowTitle7 ? (<h3 className="services-details__content__title  text-white">
                  WEBSITE DEVELOPMENT AND DESIGN
                </h3>): ('')}

                {isShowTitle8 ? (<h3 className="services-details__content__title  text-white">
                  MOBILE APPLICATION
                </h3>): ('')}

                <p className="services-details__content__text">
                  There are many variations of passages of lorem ipsum is simply
                  free text available in the market, but the majority time you
                  put aside to be in our office. Lorem ipsum dolor sit amet,
                  consectetLorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.
                </p>
                <h4 className="services-details__content__title-two">
                  Helping clients to solve appilcation development problems
                </h4>
                <p className="services-details__content__text">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur? Quis autem vel eum iure reprehenderit qui in ea
                  voluptate velit esse quam nihil molestiae consequatur.
                </p>
                <h3 className="services-details__content__title-three  text-white">
                  Why choose?
                </h3>
                <div className="row cus-row">
                  <div className="col-xl-3 col-lg-6 col-md-3">
                    <div className="services-details__box text-center">
                      <div className="services-details__box__icon">
                        <span className="icon-individual"></span>
                      </div>
                      <h3 className="services-details__box__title">
                        Professional people
                      </h3>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-3">
                    <div className="services-details__box text-center">
                      <div className="services-details__box__icon">
                        <span className="icon-report-card"></span>
                      </div>
                      <h3 className="services-details__box__title">
                        High quality projects
                      </h3>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-3">
                    <div className="services-details__box text-center">
                      <div className="services-details__box__icon">
                        <span className="icon-time-check"></span>
                      </div>
                      <h3 className="services-details__box__title">
                        Deliver
                        <br /> work on time
                      </h3>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-3">
                    <div className="services-details__box text-center">
                      <div className="services-details__box__icon">
                        <span className="icon-trophy"></span>
                      </div>
                      <h3 className="services-details__box__title">
                        Award winning agency
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="services-details__benefit">
                  <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-6">
                      <div className="services-details__benefit__img">
                        <img
                          src="assets/images/service/services-details-benefit-img.jpg"
                          alt="nisoz"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-6">
                      <div className="services-details__benefit__content">
                        <h3 className="services-details__benefit__title text-white">
                          Our benefits
                        </h3>
                        <p className="services-details__benefit__text">
                          Get the Best Digital Marketing from the Pitoon Agency
                          of Exellence
                        </p>
                        <ul className="services-details__benefit__lists list-unstyled text-white">
                          <li className="text-white">
                            <span className="fa fa-check-circle text-white"></span>Cost
                            Effective
                          </li>
                          <li className="text-white">
                            <span className="fa fa-check-circle text-white"></span>Equal
                            Opportunities
                          </li>
                          <li className="text-white">
                            <span className="fa fa-check-circle text-white"></span>Creates High
                            Brand Awareness
                          </li>
                          <li className="text-white">
                            <span className="fa fa-check-circle text-white"></span>Higher ROI
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accrodion-one__wrapper nisoz-accrodion"
                  data-grp-name="nisoz-accrodion"
                >
                  <div className="accrodion">
                    <div className="accrodion-title ">
                      <h4 className="text-white">What happens to my data if I cancel?</h4>
                    </div>
                    {/* <!-- /.accordian-title --> */}
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          There are many variations of passages of available but
                          the have suffered alteration in that some form by
                          injected randomised words which don’t look even as
                          slightly believable now.
                        </p>
                      </div>
                      {/* <!-- /.accordian-content --> */}
                    </div>
                  </div>
                  {/* <!-- /.accordian-item --> */}
                  <div className="accrodion active">
                    <div className="accrodion-title">
                      <h4 className="text-white"> 
                        What are the different types of marketing solutions?
                      </h4>
                    </div>
                    {/* <!-- /.accordian-title --> */}
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          There are many variations of passages of available but
                          the have suffered alteration in that some form by
                          injected randomised words which don’t look even as
                          slightly believable now.
                        </p>
                      </div>
                      {/* <!-- /.accordian-content --> */}
                    </div>
                  </div>
                  {/* <!-- /.accordian-item --> */}
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4 className="text-white">How often should i work on the digital marketing?</h4>
                    </div>
                    {/* <!-- /.accordian-title --> */}
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          There are many variations of passages of available but
                          the have suffered alteration in that some form by
                          injected randomised words which don’t look even as
                          slightly believable now.
                        </p>
                      </div>
                      {/* <!-- /.accordian-content --> */}
                    </div>
                  </div>
                  {/* <!-- /.accordian-item --> */}
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4 className="text-white">Are social media good for the business growth?</h4>
                    </div>
                    {/* <!-- /.accordian-title --> */}
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          There are many variations of passages of available but
                          the have suffered alteration in that some form by
                          injected randomised words which don’t look even as
                          slightly believable now.
                        </p>
                      </div>
                      {/* <!-- /.accordian-content --> */}
                    </div>
                  </div>
                  {/* <!-- /.accordian-item --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesAll;

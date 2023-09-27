import React from "react";

const CarrerProductDv = ({ isShow }) => {
  return (
    <div>
      <section className="portfolio-details">
        <div className="container">
          <div
            className="portfolio-details__image wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img
              src="assets/images/portfolio/portfolio-details.jpg"
              alt="nisoz"
            />
          </div>
          {/* <!-- /.portfolio-image --> */}
          <div className="row">
            <div
              className="col-xl-8 col-lg-7 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="portfolio-details__content">
                <h3 className="portfolio-details__content__title text-white">
                  Join Our Exciting Team
                </h3>
                <p className="portfolio-details__content__text">
                  Welcome to 360 Gram Digital, We're thrilled that you're
                  interested in joining our dynamic team of digital marketing
                  professionals. At our agency, we're passionate about helping
                  businesses thrive in the digital landscape through innovative
                  and results-driven marketing strategies.
                </p>
                <h4 className="portfolio-details__content__title2 pb-5 text-white">
                  As a member of our team, you'll have the opportunity to work
                  with a diverse range of clients spanning various industries.
                  From strategic planning and campaign execution to analytics
                  and optimization, you'll be involved in every aspect of
                  digital marketing, gaining invaluable experience and honing
                  your skills along the way.
                </h4>
                <p className="portfolio-details__content__text2">
                  Whether you're a seasoned professional or just starting your
                  career, if you're driven, creative, and thrive in a fast-paced
                  environment, we'd love to hear from you. Join us in shaping
                  the future of digital marketing. Check out our current job
                  openings below and apply today! 
                </p>
                <p className="portfolio-details__content__text2">
                  At 360 Gram, we believe in
                  fostering a culture of inclusivity and diversity. We welcome
                  applicants from all backgrounds and are committed to providing
                  equal opportunities for everyone.
                </p>
                <p className="portfolio-details__content__text2 font-bold text-center">
                Ready to take the next step
                  in your career? Apply now and embark on an exciting journey
                  with 360 Gram Digital. <span className="text-[rgb(239,16,119)]"> career@360gram.digital</span>
                </p>
                {isShow ? (
                  ""
                ) : (
                  <div className="portfolio-details__box">
                    <div className="portfolio-details__box__icon">
                      <span className="icon-increment"></span>
                    </div>
                    <h3 className="portfolio-details__box__title text-white">
                      Attract and retain quality high paying customers
                    </h3>
                    <p className="portfolio-details__box__text">
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book has
                      survived not only five centuries.
                    </p>
                  </div>
                )}
                {isShow ? (
                  ""
                ) : (
                  <div className="portfolio-details__box">
                    <div className="portfolio-details__box__icon">
                      <span className="icon-checking"></span>
                    </div>
                    <h3 className="portfolio-details__box__title text-white">
                      Strong business plan requires experience
                    </h3>
                    <p className="portfolio-details__box__text">
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book has
                      survived not only five centuries.
                    </p>
                  </div>
                )}
              </div>
            </div>
            {isShow ? (
              ""
            ) : (
              <div
                className="col-xl-4 col-lg-5 wow fadeInRight"
                data-wow-delay="400ms"
              >
                <div className="portfolio-details__right">
                  <ul className="portfolio-details__info-list list-unstyled">
                    <li>
                      <span>Date:</span>23 July 2023
                    </li>
                    <li>
                      <span>Services:</span>Digital, Marketing
                    </li>
                    <li>
                      <span>Client:</span>Mike Hardson
                    </li>
                    <li>
                      <span>Location:</span>Broklyn, New York
                    </li>
                  </ul>
                  <div className="portfolio-details__socials">
                    <a href="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.pinterest.com/">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarrerProductDv;

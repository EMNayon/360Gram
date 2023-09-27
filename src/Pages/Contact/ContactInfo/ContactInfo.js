import React from "react";

const ContactInfo = () => {
  return (
    <div>
      <section className="contact bg-black">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-12 wow fadeInLeft"
              data-wow-delay="200ms"
            >
              <div className="faq-page__help">
                <div className="faq-page__help__icon">
                  <span className="icon-phone-call-1"></span>
                </div>
                <h3 className="faq-page__help__title">
                  Do you still
                  <br /> have questions?
                </h3>
                <p className="faq-page__help__text">
                  Call Anytime
                  <a href="tel:+9288009850">+8801601082443</a>
                  <h5 className="faq-page__help__text  text-black">Write email</h5>
                <p className="contact__box__text ">
                  <a href="mailto:needhelp@company.com text-white">
                    contact@360gram.digital
                  </a>
                </p>
                </p>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6">
              <div className="contact__box">
                <div className="contact__box__icon">
                  <span className="icon-mailbox"></span>
                </div>
                <h5 className="contact__box__title text-white">Write email</h5>
                <p className="contact__box__text text-white">
                  <a href="mailto:needhelp@company.com text-white">
                    contact@360gram.digital
                  </a>
                </p>
              </div>
            </div> */}
            <div className="col-lg-4 col-md-6">
              <div className="contact__box contact__box-two">
                <div className="contact__box__icon">
                  <span className="icon-maps-and-flags"></span>
                </div>
                <h5 className="contact__box__title text-white">Visit office</h5>
                <p className="contact__box__text text-white">
                  Bangladesh office: C block, Road No-2/A, House No- 48/49,
                  Bashundhara R/a, Dhaka, Bangladesh.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact__box contact__box-two">
                <div className="contact__box__icon">
                  <span className="icon-maps-and-flags"></span>
                </div>
                <h5 className="contact__box__title text-white">Visit office</h5>
                <p className="contact__box__text text-white">
                USA Office: 466 Berriman St, Apt. 1C, Brooklyn, NY 11208-4481, USA
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo;

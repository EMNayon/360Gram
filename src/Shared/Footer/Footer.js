import React from 'react';
import footerbg from '../../assets/images/shapes/footer-bg-1.png'
import FooterLogo from '../../assets/images/360-removebg-preview.png'
const Footer = () => {
    const footer = {
        backgroundImage: `url(${footerbg})`,
        backgroundSize: 'cover', // Image size set korte chaile
        backgroundRepeat: 'no-repeat', // Image repeat korte chaile
        width: '100px', // Width set korte chaile
        height: '100px', // Height set korte chaile
      };
    return (
        <div>
              <footer class="main-footer">
                <div class="main-footer__bg" style={footer}></div>
                <div class="container">
                    <div class="main-footer__top wow fadeInUp" data-wow-delay="100ms">
                        <a href="index.html" class="main-footer__logo">
                            <img
                                src={FooterLogo}
                                alt="nisoz"
                                width="123"
                                height="44"
                            />
                        </a>
                        {/* <!-- /.footer-logo --> */}
                        <div class="main-footer__social">
                            <a href="https://twitter.com/">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.facebook.com/">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.pinterest.com/">
                                <i class="fab fa-pinterest-p"></i>
                            </a>
                            <a href="https://www.instagram.com/">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                        {/* <!-- /.footer-social --> */}
                    </div>
                    {/* <!-- footer-top --> */}
                    <div class="row">
                        <div class="col-lg-2 col-md-4 wow fadeInUp" data-wow-delay="200ms">
                            <div class="main-footer__navmenu">
                                <ul>
                                    <li>
                                        <a href="about.html">About</a>
                                    </li>
                                    <li>
                                        <a href="team.html">Meet Our Team</a>
                                    </li>
                                    <li>
                                        <a href="services.html">What We Offer</a>
                                    </li>
                                    <li>
                                        <a href="blog-grid-right.html">Latest News</a>
                                    </li>
                                </ul>
                                {/* <!-- /.list-unstyled --> */}
                            </div>
                            {/* <!-- /.footer-menu --> */}
                        </div>
                        <div class="col-lg-2 col-md-4 wow fadeInUp" data-wow-delay="300ms">
                            <div class="main-footer__navmenu">
                                <ul>
                                    <li>
                                        <a href="faq.html">Faqs</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                    <li>
                                        <a href="pricing.html">Pricing Plans</a>
                                    </li>
                                    <li>
                                        <a href="portfolio.html">Recent Work</a>
                                    </li>
                                </ul>
                                {/* <!-- /.list-unstyled --> */}
                            </div>
                            {/* <!-- /.footer-menu --> */}
                        </div>
                        <div class="col-lg-3 col-md-4 wow fadeInUp" data-wow-delay="400ms">
                            <div class="main-footer__about">
                                <p class="main-footer__about__text">C block, Road No-2/A, House No- 48/49, Bashundhara R/a, Dhaka. Bangladesh
                                </p>
                                <p class="main-footer__about__text">466 Berriman St, Apt. 1C, Brooklyn, NY 11208-4481, USA
                                </p>
                                <ul class="main-footer__about__info">
                                    <li>
                                        <span class="fas fa-phone-square"></span>
                                        <a href="tel:+923680006800">+8801 60108 2443</a>
                                    </li>
                                    <li>
                                        <span class="fas fa-envelope"></span>
                                        <a href="mailto:needhelp@company.com">contact@360gram.digital</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- /.footer-about --> */}
                        </div>
                        <div class="col-lg-5 col-md-12 wow fadeInUp" data-wow-delay="500ms">
                            <div class="main-footer__newsletter">
                                <h5 class="main-footer__newsletter__text">Subscribe to get latest updates on daily basis</h5>
                                <form class="main-footer__email-box mc-form" data-url="MC_FORM_URL" novalidate="novalidate">
                                    <div class="main-footer__email-input-box">
                                        <input type="email" placeholder="Email address" name="EMAIL"/>
                                    </div>
                                    <button type="submit" class="nisoz-btn">
                                        <span class="nisoz-btn__shape"></span>
                                        <span class="nisoz-btn__shape"></span>
                                        <span class="nisoz-btn__shape"></span>
                                        <span class="nisoz-btn__shape"></span>
                                        <span class="nisoz-btn__text">Subscribe</span>
                                    </button>
                                </form>
                                <div class="mc-form__response"></div>
                            </div>
                            {/* <!-- /.footer-mailchimp --> */}
                        </div>
                    </div>
                    {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.container --> */}
            </footer>

            <section class="copyright text-center">
                <div class="container wow fadeInUp" data-wow-delay="500ms">
                    <p class="copyright__text">© Copyright
                        <span class="dynamic-year"></span>
                        {/* <!-- /.dynamic-year --> */}
                       2023 by 
                        <a href="index.html"> 360gram.digital</a>
                    </p>
                </div>
                {/* <!-- /.container --> */}
            </section>
        </div>
    );
};

export default Footer;
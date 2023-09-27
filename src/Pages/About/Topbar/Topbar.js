import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
       
             <section class="topbar z-50">
                <div class="container-fluid">
                    <div class="topbar__wrapper">
                        <ul class="list-unstyled topbar__list">
                            <li>
                                <span class="fas fa-envelope"></span>
                                <a href="mailto:needhelp@company.com">contact@360gram.digital</a>
                            </li>
                            {/* <li>
                                <span class="fas fa-map-marker"></span>
                                Bangladesh office: C block, Road No-2/A, House No- 48/49, Bashundhara R/a, Dhaka, Bangladesh.
                            </li> */}
                        </ul>
                        {/* <!-- /.icon-box --> */}
                        <ul class="list-unstyled topbar__menu">
                            <li>
                                <a href='#'><Link to='/faq'>Help</Link></a>
                            </li>
                            <li>
                                <a href="about.html">Support</a>
                            </li>
                            <li>
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul>
                        {/* <!-- /.list-menu --> */}
                        <div class="topbar__social">
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
                        {/* <!-- /.social-links --> */}
                    </div>
                </div>
            </section>
     
    );
};

export default Topbar;
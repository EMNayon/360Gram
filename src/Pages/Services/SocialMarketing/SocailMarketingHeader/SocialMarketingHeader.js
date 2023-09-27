import React from 'react';

const SocialMarketingHeader = () => {
    return (
        <div>
             <section class="page-header">
                <div class="page-header__bg"></div>
                {/* <!-- /.page-header__bg --> */}
                <div class="page-header__shape1"></div>
                {/* <!-- /.page-header__shape1 --> */}
                <div class="page-header__shape2"></div>
                {/* <!-- /.page-header__shape1 --> */}
                <div class="page-header__shape3 wow slideInRight" data-wow-delay="300ms"></div>
                {/* <!-- /.page-header__shape3 --> */}
                <div class="container">
                    <ul class="page-header__breadcrumb list-unstyled">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <span>Services</span>
                        </li>
                        <li>
                            <span>Service Details</span>
                        </li>
                    </ul>
                    {/* <!-- /.page-breadcrumb list-unstyled --> */}
                    <h2 class="page-header__title">SOCIAL MEDIA ADVERTISING</h2>
                    {/* <!-- /.page-title --> */}
                </div>
                {/* <!-- /.container --> */}
            </section>
        </div>
    );
};

export default SocialMarketingHeader;
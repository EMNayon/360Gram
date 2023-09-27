import React from 'react';

const FaqHeader = () => {
    return (
        <div>
             <section class="page-header">
            <div class="page-header__bg"></div>
            <div class="page-header__shape1"></div>
            <div class="page-header__shape2"></div>
            <div class="page-header__shape3 wow slideInRight" data-wow-delay="300ms"></div>
            <div class="container">
                <ul class="page-header__breadcrumb list-unstyled">
                    <li><a href="index.html">Home</a></li>
                    <li><span>Faqs</span></li>
                </ul>
                <h2 class="page-header__title">Faqs</h2>
            </div>
        </section>

     
        </div>
    );
};

export default FaqHeader;
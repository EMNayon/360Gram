import React from 'react';

const ServicesOne = () => {
    return (
        <div className='bg-black'>
             <div className="client-carousel bg-black">
                <div className="container">
                    <h5 className="client-carousel__tilte">
                        <span>1K+ Brands Trust Us</span>
                    </h5>
                    {/*<!-- section-title --> */}
                    <div className="client-carousel__one nisoz-owl__carousel owl-theme owl-carousel" data-owl-options='{
            "items": 5,
            "margin": 65,
            "smartSpeed": 700,
            "loop":true,
            "autoplay": 6000,
            "nav":false,
            "dots":false,
            "navText": ["<span className=\"fa fa-angle-left\"></span>","<span className=\"fa fa-angle-right\"></span>"],
            "responsive":{
                "0":{
                    "items":1,
                    "margin": 0
                },
                "360":{
                    "items":2,
                    "margin": 0
                },
                "575":{
                    "items":3,
                    "margin": 30
                },
                "768":{
                    "items":3,
                    "margin": 40
                },
                "992":{
                    "items": 4,
                    "margin": 40
                },
                "1200":{
                    "items": 5
                }
            }
            }'>
                        <div className="client-carousel__one__item text-white">
                            <img src="assets/images/brand/brand-1-1.png" alt="nisoz"/>
                        </div>
                        {/*<!-- /.owl-slide-item--> */}
                        <div className="client-carousel__one__item">
                            <img src="assets/images/brand/brand-1-1.png" alt="nisoz"/>
                        </div>
                        {/*<!-- /.owl-slide-item--> */}
                        <div className="client-carousel__one__item">
                            <img src="assets/images/brand/brand-1-1.png" alt="nisoz"/>
                        </div>
                        {/*<!-- /.owl-slide-item--> */}
                        <div className="client-carousel__one__item">
                            <img src="assets/images/brand/brand-1-1.png" alt="nisoz"/>
                        </div>
                        {/*<!-- /.owl-slide-item--> */}
                        <div className="client-carousel__one__item">
                            <img src="assets/images/brand/brand-1-1.png" alt="nisoz"/>
                        </div>
                        {/*<!-- /.owl-slide-item--> */}
                        <div className="client-carousel__one__item">
                            <img src="assets/images/brand/brand-1-1.png" alt="nisoz"/>
                        </div>
                        {/*<!-- /.owl-slide-item--> */}
                        <div className="client-carousel__one__item">
                            <img src="assets/images/brand/brand-1-1.png" alt="nisoz"/>
                        </div>
                        {/*<!-- /.owl-slide-item--> */}
                        <div className="client-carousel__one__item">
                            <img src="assets/images/brand/brand-1-1.png" alt="nisoz"/>
                        </div>
                        {/*<!-- /.owl-slide-item--> */}
                        <div className="client-carousel__one__item">
                            <img src="assets/images/brand/brand-1-1.png" alt="nisoz"/>
                        </div>
                        {/*<!-- /.owl-slide-item--> */}
                        <div className="client-carousel__one__item">
                            <img src="assets/images/brand/brand-1-1.png" alt="nisoz"/>
                        </div>
                        {/*<!-- /.owl-slide-item--> */}
                    </div>
                    {/*<!-- /.thm-owl__slider --> */}
                </div>
                {/*<!-- /.container --> */}
            </div>
        </div>
    );
};

export default ServicesOne;
import React from 'react';
import nisozSolBg from '../../../assets/images/backgrounds/cta-bg-3.jpg'
const NisozSolution = () => {
    const nisozCta = {
        backgroundImage: `url(${nisozSolBg})`,
        backgroundSize: 'cover', // Image size set korte chaile
        backgroundRepeat: 'no-repeat', // Image repeat korte chaile
        width: '100%', // Width set korte chaile
        height: '100%', // Height set korte chaile
        backgroundBlendMode: 'luminosity',
      };
    return (
        <div>
              <section
                class="cta-three jarallax"
                data-jarallax=""
                data-speed="0.3"
                data-imgposition="50% -100%"
            >
                <div class="cta-three__bg jarallax-img" style={nisozCta}></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center wow fadeInUp" data-wow-delay="200ms">
                            <div class="section-title text-center">
                                <div class="section-title__triangle">
                                    <span class="section-title__triangle-left"></span>
                                    <span class="section-title__triangle-right"></span>
                                </div>
                                <h2 class="section-title__title">360GRAM Solutions allows your
                                    <br/>
                                    Business to Increase Productivity
                                </h2>
                            </div>
                            {/* <!-- section-title --> */}
                            <a href="contact.html" class="nisoz-btn">
                                <span class="nisoz-btn__shape"></span>
                                <span class="nisoz-btn__shape"></span>
                                <span class="nisoz-btn__shape"></span>
                                <span class="nisoz-btn__shape"></span>
                                <span class="nisoz-btn__text">Discover More</span>
                            </a>
                            {/* <!-- /.btn --> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NisozSolution;
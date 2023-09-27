import React from "react";

const BlogOneHome = ({ isShow }) => {
  return (
    <div className="">
      <section class="blog-one bg-black">
        <div class="container">
        {isShow ? ('') : (  <div className="portfolio-details__content">
            <p className="portfolio-details__content__text">
              Welcome to the 360 Gram blog, your go-to resource for all things
              digital marketing! Our blog is designed to provide valuable
              insights, tips, and trends in the ever-evolving world of digital
              marketing. Whether you're a business owner looking to enhance your
              online presence or a marketing professional seeking to stay
              up-to-date with the latest strategies, our blog has something for
              you.
            </p>
            <h4 className="portfolio-details__content__title2 pb-5 text-white">
              We're committed to providing high-quality, informative, and
              engaging content that empowers you to succeed in the digital
              realm. So, bookmark our blog, subscribe to our newsletter, and
              never miss an update!
            </h4>
            <p className="portfolio-details__content__text2">
              Have a topic you'd like us to cover or a question you'd like us to
              answer? Reach out to us, and we'll be happy to consider it for a
              future blog post. Happy reading and happy marketing from the team
              at 360 Gram Digital.  <span className="text-[rgb(239,16,119)]">
                {" "}
                 newsletter@360gram.digital
              </span>
            </p>

          </div>)}
          <div class="row">
            <div class="col-md-12 wow fadeInUp" data-wow-delay="100ms">
              {isShow ? (
                <div class="section-title text-center">
                  <div class="section-title__triangle">
                    <span class="section-title__triangle-left"></span>
                    <span class="section-title__triangle-right"></span>
                  </div>
                  <h5 class="section-title__tagline">From the Blog</h5>
                  <h2 class="section-title__title text-white">
                    News & articles
                  </h2>
                </div>
              ) : (
                ""
              )}
              {/* <!-- section-title --> */}
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
              <div class="blog-one__item">
                <div class="blog-one__image">
                  <img
                    src="assets/images/blog/blog-1-1.jpg"
                    alt="Five ways that can develop your business"
                  />
                  <a href="blog-details-right.html"></a>
                  <div class="blog-one__date">
                    <span>30</span>
                    June, 2023
                  </div>
                  {/* <!-- /.blog-date --> */}
                </div>
                {/* <!-- /.blog-image --> */}
                <div class="blog-one__content">
                  <div class="blog-one__meta">
                    <div class="blog-one__meta__author">
                      <div class="blog-one__meta__thumb">
                        <img
                          src="assets/images/blog/author-1.png"
                          alt="nisoz"
                        />
                      </div>
                      by
                      <br />
                      <a href="blog-list-right.html">Layerdrops</a>
                    </div>
                    <span class="fas fa-comments"></span>2 Comments
                  </div>
                  {/* <!-- /.blog-meta --> */}
                  <h3 class="blog-one__title">
                    <a href="blog-details-right.html">
                      Five ways that can develop your business
                    </a>
                  </h3>
                  {/* <!-- /.blog-title --> */}
                  <a href="blog-details-right.html" class="nisoz-btn">
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__text">
                      Read More
                      <span class="icon-right-arrow"></span>
                    </span>
                  </a>
                  {/* <!-- /.blog-read-more --> */}
                </div>
                {/* <!-- /.blog-content --> */}
              </div>
              {/* <!-- /.blog-card-one --> */}
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
              <div class="blog-one__item">
                <div class="blog-one__image">
                  <img
                    src="assets/images/blog/blog-1-2.jpg"
                    alt="Get a few solutions to hire a best candidate"
                  />
                  <a href="blog-details-right.html"></a>
                  <div class="blog-one__date">
                    <span>30</span>
                    June, 2023
                  </div>
                  {/* <!-- /.blog-date --> */}
                </div>
                {/* <!-- /.blog-image --> */}
                <div class="blog-one__content">
                  <div class="blog-one__meta">
                    <div class="blog-one__meta__author">
                      <div class="blog-one__meta__thumb">
                        <img
                          src="assets/images/blog/author-1.png"
                          alt="nisoz"
                        />
                      </div>
                      by
                      <br />
                      <a href="blog-list-right.html">Layerdrops</a>
                    </div>
                    <span class="fas fa-comments"></span>2 Comments
                  </div>
                  {/* <!-- /.blog-meta --> */}
                  <h3 class="blog-one__title">
                    <a href="blog-details-right.html">
                      Get a few solutions to hire a best candidate
                    </a>
                  </h3>
                  {/* <!-- /.blog-title --> */}
                  <a href="blog-details-right.html" class="nisoz-btn">
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__text">
                      Read More
                      <span class="icon-right-arrow"></span>
                    </span>
                  </a>
                  {/* <!-- /.blog-read-more --> */}
                </div>
                {/* <!-- /.blog-content --> */}
              </div>
              {/* <!-- /.blog-card-one --> */}
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
              <div class="blog-one__item">
                <div class="blog-one__image">
                  <img
                    src="assets/images/blog/blog-1-3.jpg"
                    alt="Introducing the latest tech features for you"
                  />
                  <a href="blog-details-right.html"></a>
                  <div class="blog-one__date">
                    <span>30</span>
                    June, 2023
                  </div>
                  {/* <!-- /.blog-date --> */}
                </div>
                {/* <!-- /.blog-image --> */}
                <div class="blog-one__content">
                  <div class="blog-one__meta">
                    <div class="blog-one__meta__author">
                      <div class="blog-one__meta__thumb">
                        <img
                          src="assets/images/blog/author-1.png"
                          alt="nisoz"
                        />
                      </div>
                      by
                      <br />
                      <a href="blog-list-right.html">Layerdrops</a>
                    </div>
                    <span class="fas fa-comments"></span>2 Comments
                  </div>
                  {/* <!-- /.blog-meta --> */}
                  <h3 class="blog-one__title">
                    <a href="blog-details-right.html">
                      Introducing the latest tech features for you
                    </a>
                  </h3>
                  {/* <!-- /.blog-title --> */}
                  <a href="blog-details-right.html" class="nisoz-btn">
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__text">
                      Read More
                      <span class="icon-right-arrow"></span>
                    </span>
                  </a>
                  {/* <!-- /.blog-read-more --> */}
                </div>
                {/* <!-- /.blog-content --> */}
              </div>
              {/* <!-- /.blog-card-one --> */}
            </div>

            {/* {isShow ? (
              ""
            ) : (
              <>
                <div
                  class="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div class="blog-one__item">
                    <div class="blog-one__image">
                      <img
                        src="assets/images/blog/blog-1-4.jpg"
                        alt="There are many of simple lorem available for not"
                      />
                      <a href="blog-details.html"></a>
                      <div class="blog-one__date">
                        <span>30</span>
                        June, 2023
                      </div>
                    </div>
                    <div class="blog-one__content">
                      <div class="blog-one__meta">
                        <div class="blog-one__meta__author">
                          <div class="blog-one__meta__thumb">
                            <img
                              src="assets/images/blog/author-1.png"
                              alt="nisoz"
                            />
                          </div>
                          by
                          <br />
                          <a href="blog-list.html">Layerdrops</a>
                        </div>
                        <span class="fas fa-comments"></span>2 Comments
                      </div>
                      <h3 class="blog-one__title">
                        <a href="blog-details.html">
                          There are many of simple lorem available for not
                        </a>
                      </h3>
                      <a href="blog-details.html" class="nisoz-btn">
                        <span class="nisoz-btn__shape"></span>
                        <span class="nisoz-btn__shape"></span>
                        <span class="nisoz-btn__shape"></span>
                        <span class="nisoz-btn__shape"></span>
                        <span class="nisoz-btn__text">
                          Read More<span class="icon-arrow"></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="500ms"
                >
                  <div class="blog-one__item">
                    <div class="blog-one__image">
                      <img
                        src="assets/images/blog/blog-1-5.jpg"
                        alt="When an unknown printer took a galley of type"
                      />
                      <a href="blog-details.html"></a>
                      <div class="blog-one__date">
                        <span>30</span>
                        June, 2023
                      </div>
                    </div>
                    <div class="blog-one__content">
                      <div class="blog-one__meta">
                        <div class="blog-one__meta__author">
                          <div class="blog-one__meta__thumb">
                            <img
                              src="assets/images/blog/author-1.png"
                              alt="nisoz"
                            />
                          </div>
                          by
                          <br />
                          <a href="blog-list.html">Layerdrops</a>
                        </div>
                        <span class="fas fa-comments"></span>2 Comments
                      </div>
                      <h3 class="blog-one__title">
                        <a href="blog-details.html">
                          When an unknown printer took a galley of type
                        </a>
                      </h3>
                      <a href="blog-details.html" class="nisoz-btn">
                        <span class="nisoz-btn__shape"></span>
                        <span class="nisoz-btn__shape"></span>
                        <span class="nisoz-btn__shape"></span>
                        <span class="nisoz-btn__shape"></span>
                        <span class="nisoz-btn__text">
                          Read More<span class="icon-arrow"></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="600ms"
                >
                  <div class="blog-one__item">
                    <div class="blog-one__image">
                      <img
                        src="assets/images/blog/blog-1-6.jpg"
                        alt="It has survived not only five centuries, but also"
                      />
                      <a href="blog-details.html"></a>
                      <div class="blog-one__date">
                        <span>30</span>
                        June, 2023
                      </div>
                    </div>
                    <div class="blog-one__content">
                      <div class="blog-one__meta">
                        <div class="blog-one__meta__author">
                          <div class="blog-one__meta__thumb">
                            <img
                              src="assets/images/blog/author-1.png"
                              alt="nisoz"
                            />
                          </div>
                          by
                          <br />
                          <a href="blog-list.html">Layerdrops</a>
                        </div>
                        <span class="fas fa-comments"></span>2 Comments
                      </div>
                      <h3 class="blog-one__title">
                        <a href="blog-details.html">
                          It has survived not only five centuries, but also
                        </a>
                      </h3>
                      <a href="blog-details.html" class="nisoz-btn">
                        <span class="nisoz-btn__shape"></span>
                        <span class="nisoz-btn__shape"></span>
                        <span class="nisoz-btn__shape"></span>
                        <span class="nisoz-btn__shape"></span>
                        <span class="nisoz-btn__text">
                          Read More<span class="icon-arrow"></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )} */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogOneHome;

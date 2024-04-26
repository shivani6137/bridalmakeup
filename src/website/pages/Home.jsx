import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      {/*/main-slider */}
      <section
        className="w3l-main-slider banner-slider position-relative"
        id="home"
      >
        <div className="owl-one owl-carousel owl-theme">
          <div className="item">
            <div className="slider-info banner-view banner-top1">
              <div className="container">
                <div className="banner-info header-hero-19">
                  <h5>Welcome to Vivah Vogue</h5>
                  <h3 className="title-hero-19">
                    Beautiful and natural bridal makeup
                  </h3>
                </div>
                <div className="banner-info header-hero-19 banner-info2 header-hero-192">
                  <h5>Timeless Beauty</h5>
                  <h3 className="title-hero-19">
                    With subtle and natural finish makeup
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-button">
          <a href="#about" className="scroll">
            <div className="arrow" />
          </a>
        </div>
      </section>
      {/* //main-slider */}
      {/*/bottom-3-grids*/}
      <div className="w3l-3-grids py-5" id="grids-3">
        <div className="container py-md-5 py-2">
          <div className="title-content text-center">
            <h6 className="title-subw3hny mb-1">About Us</h6>
            <h3 className="title-w3l"> Makeup Services</h3>
            <p className="text-para mb-4">
            Transforming beauty, one brushstroke at a time.{" "}
            </p>
          </div>
          {/*/row-1*/}
          <div className="row pt-lg-4 mt-5 top-grids3-info">
            <div className="col-lg-4 col-md-6 mt-md-0 mt-sm-4">
              <div className="grids3-info position-relative">
                <a href="/" className="d-block zoom">
                  <img
                    src="https://i.pinimg.com/474x/a4/89/96/a4899648c8057263d422d4df4028dc82.jpg"
                    alt=""
                    className="img-fluid news-image"
                  />
                </a>
                <div className="w3-grids3-info"></div>
              </div>
              <h4 className="text-center mt-4">
                <a href="/">Air Brush Makeup</a>
              </h4>
              <p className="text-center mb-3">
              Achieve a flawless, long-lasting finish with a feather-light feel.
              </p>
              <a className="w3item-link" href="/">
                <i className="fas fa-arrow-right" />
              </a>
            </div>
            <div className="col-lg-4 col-md-6 mt-md-0 mt-4 grids3-info2">
              <div className="grids3-info second position-relative">
                <a href="blog-single.html" className="d-block zoom">
                  <img
                    src="https://i.pinimg.com/474x/ab/4b/07/ab4b07330595dd77af790a791cd9c7d0.jpg"
                    alt=""
                    className="img-fluid news-image"
                  />
                </a>
                <div className="w3-grids3-info second"></div>
              </div>
              <h4 className="gdnhy-1 mt-4">
                <a href="/">HD Makeup</a>
              </h4>
              <p className="text-center mb-3">
              Seamless coverage, stunning results for high-definition perfection.
              </p>
              <a className="w3item-link" href="/">
                <i className="fas fa-arrow-right" />
              </a>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
              <div className="grids3-info position-relative">
                <a href="blog-single.html" className="d-block zoom">
                  <img
                    src="https://i.pinimg.com/474x/d2/81/4d/d2814d4387c41f68dc8f0df0f2db75ea.jpg"
                    alt=""
                    className="img-fluid news-image"
                  />
                </a>
                <div className="w3-grids3-info"></div>
              </div>
              <h4 className="gdnhy-1 mt-4">
                <a href="/">Matte Makeup</a>
              </h4>
              <p className="text-center mb-3">
              Achieve a velvety-smooth finish with a shine-free complexion for a modern look.
              </p>
              <a className="w3item-link" href="/">
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*//bottom-3-grids*/}
      {/*/home-page-video-popup*/}
      <section className="w3l-video-sec py-5" id="video">
        <div className="container py-md-5">
          <div className="row">
            <div className="col-lg-7 w3l-index5 py-5">
              <div className="w3video-bghny py-5">
                <div className="history-info position-relative py-5 my-lg-5">
                  <a
                    href="#small-dialog1"
                    className="popup-with-zoom-anim play-view text-center position-absolute"
                  >
                    <span className="video-play-icon">
                      <span className="fa fa-play" />
                    </span>
                  </a>
                  {/* dialog itself, mfp-hide class is required to make dialog hidden */}
                </div>
              </div>
            </div>
            <div className="col-lg-5 w3l-video-info-right ps-lg-5 mt-lg-0 mt-5">
              <div className="title-content-two">
                <h6 className="title-subw3hny">Popular Services</h6>
                <h3 className="title-w3l">Memorable Beauty Experience</h3>
                <p className="mt-2">
                Elevating your beauty journey with personalized makeup services that leave a lasting impression. From flawless bridal looks to special occasions, we curate unforgettable experiences tailored to your individual style.
                </p>
                <a
                  href="services.html"
                  className="btn btn-style btn-primary mt-lg-5 mt-4"
                >
                  Our Services{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //home-page-video-popup*/}
      {/*/Gallery-Section*/}
      <section className="w3l-gallery" id="gallery">
        <div className="destionation-innf py-5">
          <div className="container py-lg-5 py-md-4 py-2 HomePageGallery">
            <div className="title-content text-center">
              <h6 className="title-subw3hny text-center">Gallery</h6>
              <h3 className="title-w3l mb-5 text-center">Photo Gallery</h3>
            </div>
            {/*/grids-grids*/}
            <ul className="gallery_agile">
              <li>
                <div className="w3_agile_portfolio_grid">
                  <a href="/">
                    <img
                      src="https://i.pinimg.com/474x/83/b8/2e/83b82e23bfc28154c2057d70460db8c0.jpg"
                      alt=" "
                      className="img-fluid radius-image"
                    />
                    <div className="portfolio-info">
                      <h4>Gallery 1</h4>
                      <i className="fas fa-plus details-link" />
                    </div>
                  </a>
                </div>
                <div className="w3_agile_portfolio_grid mt-4">
                  <a href="/">
                    <img
                      src="https://i.pinimg.com/474x/81/f7/71/81f7716978d3721cf129df626164dcb7.jpg"
                      alt=" "
                      className="img-fluid radius-image"
                    />
                    <div className="portfolio-info">
                      <h4>Gallery 2</h4>
                      <i className="fas fa-plus details-link" />
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="w3_agile_portfolio_grid">
                  <a href="/">
                    <img
                      src="https://i.pinimg.com/474x/68/3d/0c/683d0c59ef3e029f8ac97baa5d60cd5a.jpg"
                      alt=" "
                      className="img-fluid radius-image"
                    />
                    <div className="portfolio-info">
                      <h4>Gallery 3</h4>
                      <i className="fas fa-plus details-link" />
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <div className="w3_agile_portfolio_grid">
                  <a href="/">
                    <img
                      src="https://i.pinimg.com/474x/91/d8/1b/91d81beaaee5f342a5cecde18938b5c8.jpg"
                      alt=" "
                      className="img-fluid radius-image"
                    />
                    <div className="portfolio-info">
                      <h4>Gallery 4</h4>
                      <i className="fas fa-plus details-link" />
                    </div>
                  </a>
                </div>
                <div className="w3_agile_portfolio_grid mt-4">
                  <a href="/">
                    <img
                      src="https://i.pinimg.com/474x/e5/04/4e/e5044e4d0bf843d0f9f14771f31b32ad.jpg"
                      alt=" "
                      className="img-fluid radius-image"
                    />
                    <div className="portfolio-info">
                      <h4>Gallery 5</h4>
                      <i className="fas fa-plus details-link" />
                    </div>
                  </a>
                </div>
              </li>
            </ul>
            {/*//grids-grids*/}
          </div>
        </div>
      </section>
      {/*//Gallery-Section*/}
      {/*//testimonials*/}
      <section className="w3l-clients-1" id="testimonials">
        {/*/cusrtomer-layout*/}
        <div className="cusrtomer-layout py-5 pt-0">
          <div className="container py-lg-5 py-md-4 py-2 pt-0">
            {/*/testimonial-grids*/}
            <div className="testimonial-row">
              <div
                id="owl-demo1"
                className="owl-testimonial owl-carousel owl-theme"
              >
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <div className="testi-des">
                        <i className="fas fa-quote-left" />
                        <div className="peopl align-self">
                          <h3>Tanya Purohit</h3>
                        </div>
                      </div>
                      <blockquote>
                      "Absolutely thrilled with the makeup artist services! The attention to detail and skillful application left me feeling like a true queen on my special day. Can't thank them enough for making me look and feel beautiful!"
                      </blockquote>
                      <ul className="social-media-test m-0 mt-4 p-0">
                        <li>
                          <a href="#facebook" className="facebook">
                            <span className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#twitter" className="twitter">
                            <span className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#instagram" className="instagram">
                            <span className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*//testimonial-grids*/}
          </div>
        </div>
        {/*//cusrtomer-layout*/}
      </section>
      {/* //testimonials */}
      {/*/home-page-mid*/}
      <section className="w3-midhny-sec py-5" id="mid">
        <div className="container py-lg-5">
          <div className="w3-midhny-info">
            <div className="row">
              <div className="col-lg-7">
                <div className="bottom-info">
                  <div className="header-section title-content-two pe-lg-5">
                    <h5 className="title-subw3hny mb-3">Our Special Offer</h5>
                    <h3 className="title-w3l two mb-4">
                    Free skincare consult with makeup booking! Hurry, limited!
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 align-self mt-lg-0 mt-sm-5 mt-4">
                <div className="w3l-buttons d-sm-flex justify-content-end">
                  <a
                    href="#book"
                    className="btn btn-style btn-white btn-primary"
                  >
                    Make an appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//home-page-mid*/}
      {/*/w3l-subscribe*/}
      <section className="w3l-subscribe-content py-5">
        <div className="container py-md-4 py-3 text-center">
          <div className="row">
            <div className="col-lg-9 col-md-10 mx-auto">
              <div className="subscribe mx-auto">
                <div className="header-section text-center mx-auto">
                  <h6 className="title-subw3hny mb-2">Join Us</h6>
                  <h3 className="title-w3l">Stay Update!</h3>
                  <p className="my-3 px-lg-5">
                    We appreciate your trust greatly! Our clients choose us and
                    our services because they know we’re the best.
                  </p>
                </div>
                <form
                  action="#"
                  method="post"
                  className="subscribe-wthree pt-2 mt-5"
                >
                  <div className="flex-wrap subscribe-wthree-field">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      name="email"
                      required
                    />
                    <button className="btn btn-style btn-primary" type="submit">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//w3l-subscribe*/}
      {/*/instagram-grid-wrap*/}
      <section className="instagram-grid-wrap-top">
        <div className="container-fluid mx-lg-0">
          <div className="row footer-top-29 instagram-grid-wrap px-0">
            {/* Start-Instagram */}
            <div className="col-lg-2 col-4 mt-lg-0 mt-4 instagram-grid-wrap-grid px-0">
              <div className="item-grid grid-style-1">
                <div className="img-thumb">
                  <a href="/">
                    <img
                      src="https://i.pinimg.com/474x/05/5f/89/055f89e0a8f217848b210b33f08bee14.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div className="img-thumb-item-info">
                    <div className="inner">
                      <a href="/">
                        <span className="far fa-heart" />
                        1k
                      </a>
                      <a href="/">
                        <span className="far fa-comment" />9
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Start-Instagram */}
            {/* Start-Instagram */}
            <div className="col-lg-2 col-4 mt-lg-0 mt-4 instagram-grid-wrap-grid px-0">
              <div className="item-grid grid-style-1">
                <div className="img-thumb">
                  <a href="/">
                    <img
                      src="https://i.pinimg.com/474x/4b/c9/9a/4bc99ac3f29b52f12df5bb0d61a686c6.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div className="img-thumb-item-info">
                    <div className="inner">
                      <a href="/">
                        <span className="far fa-heart" />
                        3k
                      </a>
                      <a href="/">
                        <span className="far fa-comment" />6
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Start-Instagram */}
            {/* Start-Instagram */}
            <div className="col-lg-2 col-4 mt-lg-0 mt-4 instagram-grid-wrap-grid px-0">
              <div className="item-grid grid-style-1">
                <div className="img-thumb">
                  <a href="/">
                    <img
                      src="https://i.pinimg.com/474x/05/54/5f/05545fdff97d595020712f5ddbcc3018.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div className="img-thumb-item-info">
                    <div className="inner">
                      <a href="/">
                        <span className="far fa-heart" />
                        4k
                      </a>
                      <a href="/">
                        <span className="far fa-comment" />7
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Start-Instagram */}
            {/* Start-Instagram */}
            <div className="col-lg-2 col-4 mt-lg-0 mt-4 instagram-grid-wrap-grid px-0">
              <div className="item-grid grid-style-1">
                <div className="img-thumb">
                  <a href="/">
                    <img
                      src="https://i.pinimg.com/474x/2c/3c/6a/2c3c6a57694e2bf5630030a3ae5abe8d.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div className="img-thumb-item-info">
                    <div className="inner">
                      <a href="/">
                        <span className="far fa-heart" />
                        4k
                      </a>
                      <a href="/">
                        <span className="far fa-comment" />8
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Start-Instagram */}
            {/* Start-Instagram */}
            <div className="col-lg-2 col-4 mt-lg-0 mt-4 instagram-grid-wrap-grid px-0">
              <div className="item-grid grid-style-1">
                <div className="img-thumb">
                  <a href="/">
                    <img
                      src="https://i.pinimg.com/474x/30/0c/6b/300c6b80a9e37179065d2c4598e4edd1.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div className="img-thumb-item-info">
                    <div className="inner">
                      <a href="/">
                        <span className="far fa-heart" />
                        3k
                      </a>
                      <a href="/">
                        <span className="far fa-comment" />9
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Start-Instagram */}
            {/* Start-Instagram */}
            <div className="col-lg-2 col-4 mt-lg-0 mt-4 instagram-grid-wrap-grid px-0">
              <div className="item-grid grid-style-1">
                <div className="img-thumb">
                  <a href="/">
                    <img
                      src="https://i.pinimg.com/474x/fb/35/b1/fb35b16904f43309f10929592e0a41b5.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div className="img-thumb-item-info">
                    <div className="inner">
                      <a href="/">
                        <span className="far fa-heart" />
                        6k
                      </a>
                      <a href="/">
                        <span className="far fa-comment" />7
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Start-Instagram */}
          </div>
        </div>
      </section>
      {/*//instagram-grid-wrap*/}
      <Footer />
    </div>
  );
}

export default Home;

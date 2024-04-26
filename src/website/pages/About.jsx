import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Header />
      {/*/inner-page*/}
      <div className="inner-banner py-5">
        <section className="w3l-breadcrumb text-left py-sm-5 ">
          <div className="container">
            <div className="w3breadcrumb-gids">
              <div className="w3breadcrumb-left text-left">
                <h2 className="inner-w3-title">About Us </h2>
                <p className="inner-page-para mt-2">Makeup for Everyone</p>
              </div>
              <div className="w3breadcrumb-right">
                <ul className="breadcrumbs-custom-path">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active">
                    <span className="fas fa-angle-double-right mx-2" /> About Us
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*//inner-page*/}
      {/*/bottom-3-grids*/}
      <div className="w3l-3-grids py-5" id="grids-3">
        <div className="container py-md-5 py-2">
          <div className="abin-top-content text-center mb-md-5 mb-4">
            <h6 className="title-subw3hny">About Us</h6>
            <h3 className="title-w3l mb-3">Our Story</h3>
            <p className="abinfo-para">
            Our journey began with a passion for enhancing natural beauty. Through personalized experiences and unwavering dedication, we empower every client to shine with confidence.
            </p>
          </div>
          <div className="aboyt-ininf">
            <div className="about-imgr text-center">
              <img
                src="https://i.pinimg.com/564x/93/cb/49/93cb4935a4f185c2d437fb80256f8d36.jpg"
                alt=""
                className="img-fluid radius-image"
              />
            </div>
            <div className="three-grids-hmew3">
              <div className="three-grid-1 text-left mt-5">
                <h4>Who We Are ?</h4>
                <p className="mt-2 pr-lg-4">
                A team of passionate makeup artists dedicated to enhancing natural beauty and empowering confidence in every client.
                </p>
              </div>
              <div className="three-grid-1 text-left mt-5">
                <h4>What We Do ?</h4>
                <p className="mt-2 pr-lg-4">
                We specialize in personalized makeup experiences, from bridal dreams to special occasions, ensuring flawless and radiant looks that leave a lasting impression.
                </p>
              </div>
              <div className="three-grid-1 text-left mt-5">
                <h4>Why Choose Us</h4>
                <p className="mt-2 pr-lg-4">
                With our unwavering commitment to perfection and tailored approach, we create memorable beauty journeys that celebrate individuality and elevate every moment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*//bottom-3-grids*/}
      {/*/features-section */}
      <section className="w3l-features py-5" id="work">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="title-content text-center mb-md-5 mb-4">
            <h6 className="title-subw3hny mb-1">Why Us</h6>
            <h3 className="title-w3l mb-5">What We Offer</h3>
          </div>
          <div className="main-cont-wthree-2 align-items-center text-center pt-lg-4">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                <div className="grids-1 box-wrap">
                  <div className="icon">
                    <i className="fas fa-biking" />
                  </div>
                  <h4>
                    <a href="#service" className="title-head mb-3">
                    Bridal Makeup
                    </a>
                  </h4>
                  <p className="text-para mb-3">
                  Elegant, timeless, radiant, long-lasting.{" "}
                  </p>
                  <a className="w3item-link" href="services.html">
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                <div className="grids-1 box-wrap">
                  <div className="icon">
                    <i className="far fa-gem" />
                  </div>
                  <h4>
                    <a href="#service" className="title-head mb-3">
                    Party Makeup
                    </a>
                  </h4>
                  <p className="text-para mb-3">
                  Glamorous, bold, striking, sophisticated.{" "}
                  </p>
                  <a className="w3item-link" href="services.html">
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                <div className="grids-1 box-wrap">
                  <div className="icon">
                    <i className="fas fa-theater-masks" />
                  </div>
                  <h4>
                    <a href="#service" className="title-head mb-3">
                      Roka Makeup
                    </a>
                  </h4>
                  <p className="text-para mb-3">
                  Glamorous, bold, striking, sophisticated.{" "}
                  </p>
                  <a className="w3item-link" href="services.html">
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                <div className="grids-1 box-wrap">
                  <div className="icon">
                    <i className="fas fa-bath" />
                  </div>
                  <h4>
                    <a href="#service" className="title-head mb-3">
                    Editorial Makeup
                    </a>
                  </h4>
                  <p className="text-para mb-3">
                  Creative, avant-garde, expressive, experimental.{" "}
                  </p>
                  <a className="w3item-link" href="services.html">
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//features section */}
      {/*/team*/}
      <section id="team" className="w3lteam py-5">
        <div className="container py-md-5">
          <div className="title-content text-center">
            <h6 className="title-subw3hny mb-1">Our Team</h6>
            <h3 className="title-w3l mb-5">Our Creative Team.</h3>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="pic">
                  <img
                    src="https://i.pinimg.com/474x/59/51/0b/59510b571158f40080fd0c913d68d61a.jpg"
                    className="img-fluid radius-image"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Jigna Malviya</h4>
                    <span>Founder</span>
                  </div>
                  <div className="social">
                    <a href="#facebook" className="facebook">
                      <span className="fab fa-facebook-f" />
                    </a>
                    <a href="#twitter" className="twitter">
                      <span className="fab fa-twitter" />
                    </a>
                    <a href="#linkd" className="linkd">
                      <span className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="pic">
                  <img
                    src="assets/images/team2.jpg"
                    className="img-fluid radius-image"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Sarah Jhonson</h4>
                    <span>Marketing Manager</span>
                  </div>
                  <div className="social">
                    <a href="#facebook" className="facebook">
                      <span className="fab fa-facebook-f" />
                    </a>
                    <a href="#twitter" className="twitter">
                      <span className="fab fa-twitter" />
                    </a>
                    <a href="#linkd" className="linkd">
                      <span className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="pic">
                  <img
                    src="assets/images/team3.jpg"
                    className="img-fluid radius-image"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>William Anderson</h4>
                    <span>HR Manager</span>
                  </div>
                  <div className="social">
                    <a href="#facebook" className="facebook">
                      <span className="fab fa-facebook-f" />
                    </a>
                    <a href="#twitter" className="twitter">
                      <span className="fab fa-twitter" />
                    </a>
                    <a href="#linkd" className="linkd">
                      <span className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="member">
                <div className="pic">
                  <img
                    src="assets/images/team4.jpg"
                    className="img-fluid radius-image"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Linda James</h4>
                    <span>Team Leader</span>
                  </div>
                  <div className="social">
                    <a href="#facebook" className="facebook">
                      <span className="fab fa-facebook-f" />
                    </a>
                    <a href="#twitter" className="twitter">
                      <span className="fab fa-twitter" />
                    </a>
                    <a href="#linkd" className="linkd">
                      <span className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Team Section */}
      {/*/w3l-project*/}
      <section id="counts" className="w3lcounts">
        <div className="container py-md-3">
          <div className="w3l-project-in">
            <div className="row">
              <div className="col-lg-3 col-md-6 w3stats_info counter_grid">
                <div className="count-box">
                  <i className="fas fa-users" />
                  <div className="count-box-right">
                    <p className="counter">960</p>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-md-0 w3stats_info counter_grid">
                <div className="count-box">
                  <i className="fas fa-user-shield" />
                  <div className="count-box-right">
                    <p className="counter">1560</p>
                    <p>Our Staff</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 w3stats_info counter_grid">
                <div className="count-box">
                  <i className="fas fa-headset" />
                  <div className="count-box-right">
                    <p className="counter">1660</p>
                    <p>Hours Of Support</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 w3stats_info counter_grid">
                <div className="count-box">
                  <i className="fas fa-trophy" />
                  <div className="count-box-right">
                    <p className="counter">2860</p>
                    <p>Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//w3l-project*/}
      {/*/w3l-midslider*/}
      <section className="w3l-midslider py-5" id="midslider">
        {/* /grids */}
        <div className="container py-md-5">
          <div className="row">
            <div className="col-lg-5 title-content-two text-left pe-lg-5 mb-lg-0 mb-5">
              <h6 className="title-subw3hny mb-1">What We Offer</h6>
              <h3 className="title-w3l mb-3">
              Tailored Bridal Makeup Consultations
              </h3>
              <p className="mb-3">
              Our experienced makeup artists begin with a detailed consultation to understand your unique style, preferences, and wedding theme. We collaborate closely with you to create a bridal look that enhances your natural beauty and complements your bridal attire.
              </p>
              <ul className="icon-list-items mt-3">
                <li className="icon-list-item">
                  <i aria-hidden="true" className="fas fa-circle" />
                  Personalized Consultations
                </li>
                <li className="icon-list-item mt-2">
                  <i aria-hidden="true" className="fas fa-circle" />
                  Close Collaboration
                </li>
                <li className="icon-list-item mt-2">
                  <i aria-hidden="true" className="fas fa-circle" />
                  Tailored Creations
                </li>
              </ul>
            </div>
            {/* /grids */}
            <div className="col-lg-7 stats_info-images ps-lg-5">
              <div className="stats_info-images-right row">
                <div className="col-6 mid-slider-content">
                  <img
                    src="https://i.pinimg.com/474x/2f/f1/b6/2ff1b67caafc12344d389f5e10591453.jpg"
                    className="img-fluid radius-image"
                    alt=""
                  />
                </div>
                <div className="col-6 mid-slider-content">
                  <img
                    src="https://i.pinimg.com/474x/0f/be/f3/0fbef3897e48a51d198e9e63b7573b3e.jpg"
                    className="img-fluid radius-image"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /grids */}
        </div>
      </section>
      {/*//w3l-midslider*/}
      <Footer />
    </div>
  );
}

export default About;

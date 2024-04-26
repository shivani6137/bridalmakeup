import React from 'react'
import Aheader from '../components/Aheader'
import AFooter from '../components/AFooter'

function Dashboard() {
  return (
    <div>
        <Aheader/>
            {/*/main-slider */}
            <section
        className="w3l-main-slider banner-slider position-relative"
        id="home"
      >
        <div className="owl-one owl-carousel owl-theme">
          <div className="item">
            <div className="slider-info banner-view1 banner-top1">
              <div className="container">
                <div className="banner-info header-hero-19">
                  <h5>Welcome to Admin Dashboard</h5>
                  <h3 className="title-hero-19">
                  Manage your website with ease

                  </h3>
                </div>
                <div className="banner-info header-hero-19 banner-info2 header-hero-192">
                  <h5>Powerful Tools</h5>
                  <h3 className="title-hero-19">
                  Control every aspect of your site
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
            <h6 className="title-subw3hny mb-1"> Dashboard</h6>
            <h3 className="title-w3l">Analytics Overview</h3>
            <p className="text-para mb-4">
            Get insights into your website's performance and user interactions.{" "}
            </p>
          </div>
          {/*/row-1*/}
          <div className="row pt-lg-4 mt-5 top-grids3-info">
            <div className="col-lg-4 col-md-6 mt-md-0 mt-sm-4">
              <div className="grids3-info position-relative">
                <a href="/" className="d-block zoom">
                  <img
                    src="https://img.freepik.com/free-vector/flat-people-foming-original-arrow_23-2147675583.jpg?t=st=1713550832~exp=1713554432~hmac=c2136526d91fc98a85ec127cc38b8a8436057132c91f679e1a478a164bad197e&w=740"
                    alt=""
                    className="img-fluid news-image"
                  />
                </a>
                <div className="w3-grids3-info"></div>
              </div>
              <h4 className="text-center mt-4">
                <a href="/">Monthly Visitors</a>
              </h4>
              <p className="text-center mb-3">
              Track the number of visitors to your website each month.
              </p>
              <a className="w3item-link" href="/">
                <i className="fas fa-arrow-right" />
              </a>
            </div>
            <div className="col-lg-4 col-md-6 mt-md-0 mt-4 grids3-info2">
              <div className="grids3-info second position-relative">
                <a href="blog-single.html" className="d-block zoom">
                  <img
                    src="https://img.freepik.com/free-vector/wireframing-concept-illustration_114360-2655.jpg?t=st=1713550954~exp=1713554554~hmac=8c12180432ec70d08fbd3ff5f21e21412159565eb66709aa56171655ad924edd&w=740"
                    alt=""
                    className="img-fluid news-image"
                  />
                </a>
                <div className="w3-grids3-info second"></div>
              </div>
              <h4 className="gdnhy-1 mt-4">
                <a href="/">Page Views</a>
              </h4>
              <p className="text-center mb-3">
              Monitor the number of views each page receives.
              </p>
              <a className="w3item-link" href="/">
                <i className="fas fa-arrow-right" />
              </a>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
              <div className="grids3-info position-relative">
                <a href="blog-single.html" className="d-block zoom">
                  <img
                    src="https://img.freepik.com/free-vector/growth-curve-concept-illustration_114360-4361.jpg?t=st=1713551011~exp=1713554611~hmac=f97d4f1071521b503ad21ecbe762b749afe4ca082cdab53cd8445e3e86e15d82&w=740"
                    alt=""
                    className="img-fluid news-image"
                  />
                </a>
                <div className="w3-grids3-info"></div>
              </div>
              <h4 className="gdnhy-1 mt-4">
                <a href="/">Conversion Rate</a>
              </h4>
              <p className="text-center mb-3">
              Analyze the percentage of visitors who take desired actions.
              </p>
              <a className="w3item-link" href="/">
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*//bottom-3-grids*/}
      <AFooter/>
    </div>
  )
}

export default Dashboard

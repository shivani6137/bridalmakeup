import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Artist() {
  return (
    <div>
    <Header/>
    {/*/inner-page*/}
    <div className="inner-banner1 py-5">
      <section className="w3l-breadcrumb text-left py-sm-5 ">
        <div className="container">
          <div className="w3breadcrumb-gids">
            <div className="w3breadcrumb-left text-left">
              <h2 className="inner-w3-title">Discover Our Makeup Artists</h2>
              <p className="inner-page-para mt-2">Beauty Care for Everyone</p>
            </div>
            <div className="w3breadcrumb-right">
              <ul className="breadcrumbs-custom-path">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">
                  <span className="fas fa-angle-double-right mx-2" /> Makeup Artist
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    {/*//inner-page*/}
    {/*/w3l-services-1*/}
    
   
   
    <div className="w3l-services-1 py-5" id="grids-3">
  <div className="container py-md-5 py-2">
    <div class="row mb-5 pb-lg-4">
      <div class="col-lg-6 p5-lg-4 services-1-left">
        <div class="service-card">
          <img src="https://i.pinimg.com/474x/f3/27/95/f327958003e574430334755a32c95ff4.jpg" alt="" class="img-fluid radius-image" />
          <div class="service-card-overlay"></div>
        </div>
        <div class="overlay-content">
          <h6 class="title-subw3hny mb-1">Makeup Artist Info</h6>
          <h3 class="title-w3l mb-3">
            Explore our spa and body treatment
          </h3>
          <p class="mb-4">
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
            ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
            amet elit ipsum dolor.Lorem ipsum viverra feugiat. Pellen tesque
            libero ut justo, ultrices in ligula. Semper at tempufddfel
            tesque libero ut justo.
          </p>
          <a href="#services" class="btn btn-style btn-primary mt-lg-5 mt-4">
            Read More
          </a>
        </div>
      </div>
      
     
      
    </div>
  </div>
</div>






    <Footer/>
  </div>
  )
}

export default Artist

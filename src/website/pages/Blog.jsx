import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Blog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/blog`);
    console.log(res.data);
    setData(res.data);
  };

  return (
    <div>
      <Header />
      {/*/inner-page*/}
      <div className="inner-banner2 py-5">
        <section className="w3l-breadcrumb text-left py-sm-5 ">
          <div className="container">
            <div className="w3breadcrumb-gids">
              <div className="w3breadcrumb-left text-left">
                <h2 className="inner-w3-title">Blog </h2>
                <p className="inner-page-para mt-2"> Unveiling Beauty: The Ultimate Bridal Makeup Guide</p>
              </div>
              <div className="w3breadcrumb-right">
                <ul className="breadcrumbs-custom-path">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active">
                    <span className="fas fa-angle-double-right mx-2" /> Blog
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*//inner-page*/}
     
     {/* Blog start here */}
      <section className="w3l-services-2" id="services1">
        <div className="midd-w3 py-5">
          <div className="container py-lg-5 py-md-3">
            <div className="serve-title-header text-center mx-auto">
              <h6 className="title-subw3hny mb-1">BLOGS</h6>
              <h3 className="title-w3l mb-3">
              Bridal Beauty Bliss: Your Guide to Radiant Wedding Day Makeup
              </h3>
              <p className="abinfo-para">
              Our blog is your ultimate destination for expert tips, trend insights, product recommendations, and real-life inspiration to ensure you shine radiantly on your special day.
              </p>
            </div>
            <div className="grids-of-5 row mt-5 text-center">
              <div className="col-lg-4 col-md-6">
              {data.map((value, index) => (
                <div key={index} className="grids5-info mt-4">
                  <a href="#service" className="d-block zoom">
                    <img
                      src={value.img}
                      alt=""
                      className="img-fluid radius-image"
                    />
                  </a>
                  <div className="blog-info">
                    <h4>
                      <a href="#service">{value.title}</a>
                    </h4>
                  </div>
                </div>
                  ))}
              </div>
             
            </div>
          </div>
        </div>
      </section>
     
      {/* Blog end here */}
      <Footer />
    </div>
  );
}

export default Blog;

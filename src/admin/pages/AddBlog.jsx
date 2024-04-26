import React, { useState } from "react";
import axios from "axios";
import Aheader from '../components/Aheader'
import AFooter from '../components/AFooter'

function AddBlog() {

  
    const [formData, setFormData] = useState({
      id: "",
      title: "",
      image: "",
      description: "",

    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await axios.post("https://beaidal.com/create_blog.php", formData);
      console.log(res);
      // Reset form data after successful submission
      if (res.status === 201) {
        setFormData({
          id: "",
          title: "",
          image: "",
          description: "",
        });
        alert("Blog added successfully");
        return false;
      }
    };
  return (
    <div>
      <Aheader/>
       {/*/inner-page*/}
       <div className="inner-banner2 inner-banner2d py-5">
        <section className="w3l-breadcrumb text-left py-sm-5 ">
          <div className="container">
            <div className="w3breadcrumb-gids">
              <div className="w3breadcrumb-left text-left">
                <h2 className="inner-w3-title"> Add Blog </h2>
              </div>
              <div className="w3breadcrumb-right">
                <ul className="breadcrumbs-custom-path">
                  <li>
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="active">
                    <span className="fas fa-angle-double-right mx-2" />Add Blog
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*//inner-page*/}
      <div className="container py-5">
  <div className="row g-5">
    {/* Blog Form Start */}
    <div className="col-lg-8 container">
    {/* <h3 className="title-w3l mb-4 mt-4 text-center">
             Add Blog
              </h3> */}
      <form onSubmit={handleSubmit} style={{ backgroundColor: ' #7B76A0 ', padding: '20px', borderRadius: '10px' }}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label" style={{ color: 'white' }}>
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ backgroundColor: '#d8bfd8', color: '#4b0082' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label" style={{ color: 'white' }}>
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            style={{ backgroundColor: '#d8bfd8', color: '#4b0082' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label" style={{ color: 'white' }}>
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            style={{ backgroundColor: '#d8bfd8', color: '#4b0082' }}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#50488A ' }}>
          Add Blog
        </button>
      </form>
    </div>
    {/* Blog Form End */}
  </div>
</div>
<AFooter/>
    </div>
  )
}

export default AddBlog;

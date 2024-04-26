import React from 'react'

function Signup() {
  return (
    <div>
      <div className="container  mt-5">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center pb-5">Artist Profile</h3>
              <hr />
              <br />
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3 ">
                      <label htmlFor="fullName" className="form-label">
                        Main_profile
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="Profile"
                        placeholder="Enter your Profile"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="title"
                        placeholder="Enter your title"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Contact
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="contact"
                        placeholder="Enter your Contact"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="mobile" className="form-label">
                        Address_title
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        name="address"
                        placeholder="Enter your address title"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="profileImage" className="form-label">
                        Full address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="full address"
                        placeholder="Enter your full address"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="profileImage" className="form-label">
                        Address_map_url
                      </label>
                      <input
                        type="url"
                        className="form-control"
                        name="url"
                        placeholder="Enter your address url"
                      />
                    </div>{" "}
                    <div className="mb-3">
                      <label htmlFor="profileImage" className="form-label">
                        About_us
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="about"
                        placeholder="Enter your about"
                      />
                    </div>{" "}
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="profileImage" className="form-label">
                        Services_included
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="service"
                        placeholder="Enter your service"
                      />
                    </div>{" "}
                    <div className="mb-3">
                      <label htmlFor="profileImage" className="form-label">
                        Portfolio_image
                      </label>
                      <input
                        type="url"
                        className="form-control"
                        name="image"
                        placeholder="Enter your image url"
                      />
                    </div>{" "}
                    <div className="mb-3">
                      <label htmlFor="profileImage" className="form-label">
                        Since_works
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="works"
                        placeholder="Enter your since works"
                      />
                    </div>{" "}
                    <div className="mb-3">
                      <label htmlFor="profileImage" className="form-label">
                        Product_used
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="product"
                        placeholder="Enter your product"
                      />
                    </div>{" "}
                    <div className="mb-3">
                      <label htmlFor="profileImage" className="form-label">
                        Advance_ammount
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="advance"
                        placeholder="Enter your Advance ammount"
                      />
                    </div>{" "}
                    <div className="mb-3">
                      <label htmlFor="profileImage" className="form-label">
                        Trave_to_venue
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="travel"
                        placeholder="Enter your vanue"
                      />
                    </div>{" "}
                    <div className="mb-3">
                      <label htmlFor="profileImage" className="form-label">
                        Airbrush
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="airbrush"
                        placeholder="Airbrush"
                      />
                    </div>{" "}
                  </div>
                  <div className="mb-3 text-center">
                    <label htmlFor="profileImage" className="form-label">
                      Status
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="status"
                      placeholder="Enter your Status"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Signup

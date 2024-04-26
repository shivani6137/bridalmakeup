import React, { useState} from "react";
import axios from "axios";
// import { toast } from "react-toastify";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Contact() {
  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    comment: "",
  });

  const getform = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(formvalue);
  };

  const submithandle = async (e) => {
    e.preventDefault(); //stop page relaod
    const res = await axios.post("https://beaidal.com/create_contacts.php", formvalue);
    console.log(res);
    if (res.status === 201) {
      setFormvalue({
        ...formvalue,
        id: "",
        name: "",
        email: "",
        mobile: "",
        comment: "",
      });
    
      alert("Details submitted success");
      return false;
    }
  };
  return (
    <div>
      <Header />
      {/*/inner-page*/}
      <div className="inner-banner3 py-5">
        <section className="w3l-breadcrumb text-left py-sm-5 ">
          <div className="container">
            <div className="w3breadcrumb-gids">
              <div className="w3breadcrumb-left text-left">
                <h2 className="inner-w3-title">Contact Us </h2>
                <p className="inner-page-para mt-2">Beauty Care for Everyone</p>
              </div>
              <div className="w3breadcrumb-right">
                <ul className="breadcrumbs-custom-path">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active">
                    <span className="fas fa-angle-double-right mx-2" /> Contact
                    Us
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*//inner-page*/}
      {/* /contacts */}
      {/* contact-form 2 */}
      <section className="w3l-contact-2 py-5" id="contact">
        <div className="container py-lg-4 py-md-3 py-2">
          <div className="title-content text-center">
            <h6 className="title-subw3hny mb-1">Get in touch</h6>
            <h3 className="title-w3l mb-5">
              Contact with our support <br />
              during emergency!
            </h3>
          </div>
          <div className="contact-grids d-grid mt-5 pt-lg-3">
            <div className="contact-left">
              <div className="cont-details">
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fas fa-map-marker-alt" />
                  </div>
                  <div className="cont-right">
                    <h6>Our Office address:</h6>
                    <p>Lorem ipsum, 343 , #4148 Honey Street, NY - 62617.</p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fas fa-phone-alt" />
                  </div>
                  <div className="cont-right">
                    <h6>Call for help :</h6>
                    <p>
                      <a href="tel:+1(21) 234 4567">+1(21) 234 557 4567</a>
                    </p>
                    <p>
                      <a href="tel:+1(21) 234 4567">+1(21) 234 557 4568</a>
                    </p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="far fa-envelope" />
                  </div>
                  <div className="cont-right">
                    <h6>Mail us:</h6>
                    <p>
                      <a href="mailto:support@mail.com" className="mail">
                        support@mail.com
                      </a>
                    </p>
                    <p>
                      <a href="mailto:contact@mail.com" className="mail">
                        contact@mail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-right">
              <form
                action=""
                method="post"
                className="signin-form"
                onSubmit={submithandle}
              >
                <div className="input-grids">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formvalue.name}
                    onChange={getform}
                    id="w3lName"
                    placeholder="Your Name*"
                    className="contact-input"
                  />
                  <input
                    type="email"
                    name="email"
                        required
                        value={formvalue.email}
                        onChange={getform}
                    id="w3lSender"
                    placeholder="Your Email*"
                    className="contact-input"
                  />
                </div>
                <div className="form-input">
                <input
                    type="nimber"
                    name="mobile"
                    required
                    value={formvalue.mobile}
                    onChange={getform}
                    id="w3lPhone"
                    placeholder="Enter your Phone Number *"
                  />
                  </div>
                <div className="form-input">
                  <textarea
                     name="comment"
                     required
                     value={formvalue.comment}
                     onChange={getform}
                    id="w3lMessage"
                    placeholder="Type your message here*"
                    defaultValue={""}
                  />
                </div>
                <div className="submit-w3l-button text-lg-right">
                  <button className="btn btn-style btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="map-iframe mt-5 pt-lg-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
              width="100%"
              height={400}
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
              title="e"
            />
          </div>
        </div>
      </section>
      {/* /contact-form-2 */}
      {/* //contacts */}
      <Footer />
    </div>
  );
}

export default Contact;

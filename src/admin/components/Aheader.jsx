import React from "react";
import { Link } from "react-router-dom";

function Aheader() {
  return (
    <>
      {/*/Header*/}
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
            <h1>
              <a className="navbar-brand pe-xl-5 pe-lg-4" href="index.html">
                <i className="fas fa-spa" />
                Vivah Vogue
              </a>
            </h1>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars" />
              <span className="navbar-toggler-icon fa icon-close fa-times" />
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-lg-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/mdashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/martist">
                    Artist
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="contactDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="contactDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/addblog">
                        Add Blog
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/manageblog">
                        Manage Blog
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/acontact">
                    Contact
                  </Link>
                </li>
              </ul>
              {/*/search-right*/}
              <ul className="header-search me-lg-4">
                <li className="nav-item search-right">
                  <a
                    href="#search"
                    className="btn search-btn btn-primary"
                    title="search"
                  >
                    Search{" "}
                    <span className="fas fa-search ms-3" aria-hidden="true" />
                  </a>
                  {/* search popup */}
                  <div id="search" className="pop-overlay">
                    <div className="popup">
                      <h3 className="title-w3l two mb-4 text-left">
                        LogIn
                      </h3>
                      <form
                        action="#"
                        method="GET"
                        className="search-box d-flex position-relative"
                      >
                        <input
                          type="search"
                          placeholder="Enter Keyword here"
                          name="search"
                          required="required"
                          autofocus
                        />
                        <button type="submit" className="btn">
                          <span className="fas fa-search" aria-hidden="true" />
                        </button>
                      </form>
                    </div>
                    <a className="close" href="#close">
                      ×
                    </a>
                  </div>
                  {/* /search popup */}
                </li>
              </ul>
              {/*//search-right*/}
            </div>
            {/* toggle switch for light and dark theme */}
            <div className="mobile-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="mode-container">
                      <i className="gg-sun" />
                      <i className="gg-moon" />
                    </div>
                  </label>
                </div>
              </nav>
            </div>
            {/* //toggle switch for light and dark theme */}
          </nav>
        </div>
      </header>
      {/*//Header*/}
    </>
  );
}

export default Aheader;

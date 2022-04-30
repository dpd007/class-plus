import React from "react";
import BrandLogo from "../images/Classplus logo.svg";
import "./css/Navbar.css";
import Button from "./UI/Button";
const Navbar = ({ nav_links }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="true">
          <img src={BrandLogo} className="img-fluid" alt="Brand Logo" />
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {nav_links.map((item, index) => {
              return (
                <li className="nav-item nav__link mx-3" key={index}>
                  <a className="nav-link" href="true">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <form className="form-inline my-2 my-lg-0">
          <Button str="partner with us" />
        </form>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

import "./css/ScreenOne.css";
import React from "react";
import Button from "./UI/Button";
import content from "../images/ganguly.png";
const ScreenOne = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="row__text">
            <h3>
              Are you looking to <span>grow your business</span> and unlock new
              revenue streams?
            </h3>
            <p>
              Grow with India's largest B2B Edtech company and earn by selling
              our solutions.
            </p>
            <form>
              <Button str="grow with us" bigFont="true" />
            </form>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="coloured__div"></div>
          <div className="content__div">
            <img src={content} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ScreenOne;

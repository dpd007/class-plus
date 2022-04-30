import "./css/Feature.css";
import React from "react";
import FeatureOne from "../images/feature1.png";
import FeatureTwo from "../images/feature2.png";
const Feature = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
          <img src={FeatureOne} className="img-fluid" alt="" />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
          <img src={FeatureTwo} className="img-fluid" alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Feature;

import React from "react";
import TeamImgOne from "../images/teams1.png";
import TeamImgTwo from "../images/teams.png";
const ScreenThree = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-right">
          <img src={TeamImgOne} className="img-fluid" alt="" />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
          <img src={TeamImgTwo} className="img-fluid" alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ScreenThree;

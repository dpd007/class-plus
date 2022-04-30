import React from "react";
import "./css/ScreenTwo.css";
import Button from "./UI/Button";
import Card from "./UI/Card";
const ScreenTwo = ({ cardList }) => {
  return (
    <React.Fragment>
      <div className="row screen__two__row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 card__holder text-center">
          <div className="container">
            {cardList.map((card) => {
              return (
                <React.Fragment key={card.id}>
                  <Card
                    id={card.id}
                    headText={card.head_text}
                    text={card.text}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 award__holder">
          <h5>
            Awards & <span>recognitions</span>
          </h5>
          <div className="container">
            <p>
              Started three years ago, Classplus is on a mission to give every
              coaching institute of the country their very own coaching app. An
              app equipped with world-class technology which enables coaching
              institutes to go beyond the geographical boundaries and become a
              national brand. Over the years, Classplus and its team has been
              awarded by various prestigious platforms for their mission towards
              the coaching institutes and its world-class product.
            </p>
            <form className="form">
              <Button str="grow with us" bigFont="true" />
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ScreenTwo;

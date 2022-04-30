import React from "react";
import "./css/ScreenFour.css";
const ScreenFour = ({ questions }) => {
  return (
    <React.Fragment>
      <h5>
        frequently asked <span>questions</span>
      </h5>
      <div className="container">
        {questions.map((item) => {
          return (
            <div className="collapsible my-3" key={item.id}>
              <button
                data-toggle="collapse"
                data-target={`#content${item.id}`}
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                {item.question}
              </button>
              <div className="collapse p-1" id={`content${item.id}`}>
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default ScreenFour;

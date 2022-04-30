import "./Card.css";
import CardOne from "../../images/card/card1.png";
import CardTwo from "../../images/card/card2.png";
import CardThree from "../../images/card/card3.png";
const Card = ({ id, headText, text }) => {
  let imgUrl;
  if (id === 1) {
    imgUrl = CardOne;
  } else if (id === 2) {
    imgUrl = CardTwo;
  } else {
    imgUrl = CardThree;
  }
  return (
    <div className={`card my__card card${id}`}>
      <div className="img__holder text-center">
        <img src={imgUrl} alt="" />
      </div>
      <div className="card-body text-center">
        <h5>{headText}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;

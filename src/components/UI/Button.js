import "./Button.css";
const Button = ({ str, bigFont, isContact }) => {
  return (
    <button
      className={`btn btn-outline-success my-2 my-sm-0 my__btn ${
        bigFont && `big_btn`
      } ${isContact ? `contact__btn` : `any__btn`}`}
      type="submit"
    >
      {str}
    </button>
  );
};

export default Button;

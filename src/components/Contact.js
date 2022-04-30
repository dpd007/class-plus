import "./css/Contact.css";
import Button from "./UI/Button";
const Contact = () => {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div className="contact__inner__holder">
          <h4>Book a free demo</h4>
          <h5>Ready to take your business online?</h5>
          <p>
            Experienced and trusted by coaching institutes across India. Request
            a free demo to see how Classplus can help you boost your business.
          </p>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 contact__holder2">
        <div className="contact__form__holder">
          <form className="p-4">
            <div className="form-group">
              <input
                type="text"
                names="name"
                placeholder="Your Full Name*"
                className="form-control"
                required={true}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Contact Number"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="company__name"
                placeholder="Name of your Company"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <select
                name="profession"
                id="profession"
                className="form-control"
              >
                <option value="profession">Profession</option>
                <option value="profession">Profession</option>
                <option value="profession">Profession</option>
                <option value="profession">Profession</option>
              </select>
            </div>
            <div className="form-group">
              <select name="state" id="state" className="form-control">
                <option value="State">State</option>
                <option value="State">State</option>
                <option value="State">State</option>
                <option value="State">State</option>
              </select>
            </div>
            <Button
              str="partner with us"
              className="text-center"
              isContact="true"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

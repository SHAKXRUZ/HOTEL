import "./Check.css";
import CheckImages from "../../assets/images/check1.png";
const Check = () => {
  return (
    <div className="check">
      <div className="checks">
        <div className="check_titles">
          <h2 className="check_title">Check Availability</h2>
          <p className="check_text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </p>
        </div>
        <div className="check_content">
          <img className="check_images" src={CheckImages} alt="check_images" />
          <form className="check_right">
            <div className="check_right_input_div">
              <p className="check_input_text">CHECK-IN</p>
              <input className="check_input" type="date" required />
            </div>
            <div className="check_right_input_div">
              <p className="check_input_text">CHECK-OUT</p>
              <input className="check_input" type="date" required />
            </div>
            <div className="check_right_input_div">
              <p className="check_input_text">GUESTS:</p>
              <select className="check_input">
                <option>1 Room</option>
                <option>2 Room</option>
                <option>3 Room</option>
                <option>4 Room</option>
                <option>5 Room</option>
              </select>
            </div>
            <button className="check_form_btn">CHECK AVAILABILITY</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Check;

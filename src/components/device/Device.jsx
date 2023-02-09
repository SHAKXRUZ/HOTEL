import "./Device.css";
import Servic1 from "../../assets/images/servic1.svg";
import Servic2 from "../../assets/images/servic2.svg";
import Servic3 from "../../assets/images/servic3.svg";
import Servic4 from "../../assets/images/servic4.svg";
import Servic5 from "../../assets/images/servic5.svg";
import Servic6 from "../../assets/images/servic6.svg";

const Device = () => {
  return (
    <div className="servic">
      <div className="servic_container">
        <div className="servic_titles">
          <h2 className="servic_title">OUR SERVICES</h2>
          <p className="servic_text">Hotel Facilities</p>
        </div>

        <div className="servic_card_group">
          <div className="servic_card">
            <div className="servic_card_titles">
              <p className="servic_card_title">Pick up & Drop</p>
              <img src={Servic1} alt="servic_card_images" />
            </div>
            <p className="servic_card_text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page.
            </p>
          </div>
          <div className="servic_card">
            <div className="servic_card_titles">
              <p className="servic_card_title">PParking Space</p>
              <img src={Servic2} alt="servic_card_images" />
            </div>
            <p className="servic_card_text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="servic_card">
            <div className="servic_card_titles">
              <p className="servic_card_title">Room Services</p>
              <img src={Servic3} alt="servic_card_images" />
            </div>
            <p className="servic_card_text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page.
            </p>
          </div>
          <div className="servic_card">
            <div className="servic_card_titles">
              <p className="servic_card_title">Swimming Pool</p>
              <img src={Servic4} alt="servic_card_images" />
            </div>
            <p className="servic_card_text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="servic_card">
            <div className="servic_card_titles">
              <p className="servic_card_title">Fibre Internet</p>
              <img src={Servic5} alt="servic_card_images" />
            </div>
            <p className="servic_card_text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page.
            </p>
          </div>
          <div className="servic_card">
            <div className="servic_card_titles">
              <p className="servic_card_title">Breakfast</p>
              <img src={Servic6} alt="servic_card_images" />
            </div>
            <p className="servic_card_text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Device;

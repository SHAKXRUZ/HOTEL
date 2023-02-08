import "./Room.css";
import Room1 from "../../assets/images/room1.png";
import Room2 from "../../assets/images/room2.png";
import Room3 from "../../assets/images/room3.png";

const Room = () => {
  return (
    <div className="room">
      <div className="room_container">
        <div className="room_titles">
          <h2 className="room_title">Our Most Populer Room</h2>
          <p className="room_text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </p>
        </div>
        <div className="room_content">
          <div className="room_cards">
            <img
              src={Room1}
              alt="room_cards_images"
              className="room_card_images"
            />
            <div className="room_cards_content">
              <p className="room_cards_title">Deluxe Contrast Room</p>
              <div className="room_cards_bottom">
                <p className="room_bottom_text1">$200</p>
                <p className="room_bottom_text2">/ Night</p>
              </div>
            </div>
          </div>
          <div className="room_cards">
            <img
              src={Room2}
              alt="room_cards_images"
              className="room_card_images"
            />
            <div className="room_cards_content">
              <p className="room_cards_title">Luxery Twin Room</p>
              <div className="room_cards_bottom">
                <p className="room_bottom_text1">$250</p>
                <p className="room_bottom_text2">/ Night</p>
              </div>
            </div>
          </div>
          <div className="room_cards">
            <img
              src={Room3}
              alt="room_cards_images"
              className="room_card_images"
            />
            <div className="room_cards_content">
              <p className="room_cards_title">Single Contrast Room</p>
              <div className="room_cards_bottom">
                <p className="room_bottom_text1">$280</p>
                <p className="room_bottom_text2">/ Night</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Room;

import "./History.css";
import HistoryImages from "../../assets/images/history.png";
import HeroBannerAudio from "../../assets/images/heroBanner_audio.png";

const History = () => {
  return (
    <div className="history">
      <div className="history_container">
        <div className="history_titles">
          <div className="history_titles_card">
            <p className="history_titles_text1">302 +</p>
            <p className="history_titles_text2">Room & Suites</p>
          </div>
          <p className="history_titles_line"></p>
          <div className="history_titles_card">
            <p className="history_titles_text1">25</p>
            <p className="history_titles_text2">Restaurant</p>
          </div>
          <p className="history_titles_line"></p>
          <div className="history_titles_card">
            <p className="history_titles_text1">510+</p>
            <p className="history_titles_text2">Exceptional Food</p>
          </div>
          <p className="history_titles_line"></p>
          <div className="history_titles_card">
            <p className="history_titles_text1">65</p>
            <p className="history_titles_text2">Destination</p>
          </div>
        </div>

        <div className="history_content">
          <div className="history_content_cards">
            <p className="history_cards_title">Discover Our History</p>
            <p className="history_cards_text1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
            <p className="history_cards_text2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>

            <div className="heroBanner_left_btn">
              <button className="heroBanner_left_btn1">Explore More</button>
              <div className="heroBanner_left_audio">
                <img
                  className="heroAudio"
                  src={HeroBannerAudio}
                  alt="heroBanner_images"
                />
                <p className="heroBanner_audio_text">Watch video</p>
              </div>
            </div>
          </div>
          <img
            className="history_images"
            src={HistoryImages}
            alt="history_images"
          />
        </div>
      </div>
    </div>
  );
};
export default History;

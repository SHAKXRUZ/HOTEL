import "./HeroBanner.css";
import HeroBannerAudio from "../../assets/images/heroBanner_audio.png";
import HeroBannerImages from "../../assets/images/heroBanner.png";
const HeroBanner = () => {
  return (
    <div className="heroBanner">
      <div className="heroBanners">
        <div className="heroBanner_content">
          <div className="heroBanner_left">
            <h2 className="heroBanner_title">
              Discover a hotel that defies a new dimension of luxury.
            </h2>
            <p className="heroBanner_text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
            <div className="heroBanner_left_btn">
              <button className="heroBanner_left_btn1">Get Started</button>
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
            className="heroBanner_images"
            src={HeroBannerImages}
            alt="heroBanner_images"
          />
        </div>
      </div>
    </div>
  );
};
export default HeroBanner;

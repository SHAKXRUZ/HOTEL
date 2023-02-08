import "./Header.css";
import HeaderLogo from "../../assets/images/header_logo.svg";
import { TiThMenu } from "react-icons/ti";
const Header = () => {
  return (
    <div className="header">
      <div className="header_content">
        <header>
          <span>
            <img className="header_logo" src={HeaderLogo} alt="header_logo" />
          </span>
          <nav>
            <ul className="navbar_item">
              <li className="navbar_list">
                <a href="/" className="navbar_link">
                  Home
                </a>
              </li>
              <li className="navbar_list">
                <a href="/" className="navbar_link">
                  Branch
                </a>
              </li>
              <li className="navbar_list">
                <a href="/" className="navbar_link">
                  Search
                </a>
              </li>
              <li className="navbar_list">
                <a href="/" className="navbar_link">
                  About Us
                </a>
              </li>
              <li className="navbar_list">
                <a href="/" className="navbar_link">
                  Pages
                </a>
              </li>
              <li className="navbar_list">
                <a href="/" className="navbar_link">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <button className="header_btn">Reservation</button>
          <TiThMenu className="menu" />
        </header>
      </div>
    </div>
  );
};
export default Header;

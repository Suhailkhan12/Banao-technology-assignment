import "./rightaside.scss";
import Info from "../../assets/Vectorfour.svg";
import Location from "../../assets/Vectorfive.svg";
import Edit from "../../assets/Vectorsix.svg";
import EditMobile from "../../assets/edittwo.svg";
import { Link } from "react-router-dom";

function Rightaside() {
  return (
    <>
      <div className="right">
        <div className="right__content">
          <div className="location">
            <div className="location__info">
              <img src={Location} alt="." />
              <span>Noida, India</span>
            </div>
            <div className="location__edit">
              <img src={Edit} alt="edit" />
            </div>
          </div>
          <div className="message">
            <img src={Info} alt="." />
            <span>
              Your location will help us serve better and extend a personalised
              experience.
            </span>
          </div>
        </div>
      </div>
      <Link to="/post">
        <div className="mobile__edit">
          <img src={EditMobile} alt="edit" />
        </div>
      </Link>
    </>
  );
}

export default Rightaside;

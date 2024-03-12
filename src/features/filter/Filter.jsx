import "./filter.scss";
import Arrowdown from "../../assets/Vector.svg";
import Groupicon from "../../assets/Vectortwo.svg";
import "../../ui/button.scss";
import { useUser } from "../authentication/useUser";
import { Link } from "react-router-dom";

function Filter() {
  const { isAuthenticated } = useUser();

  return (
    <div className="filter">
      <div className="filter__post">
        <ul className="filter__post--list">
          <li>All Post(32)</li>
          <li>Article</li>
          <li>Event</li>
          <li>Education</li>
          <li>Job</li>
        </ul>
      </div>
      <div className="filter__button">
        <button className="button social-button-facebook">
          {isAuthenticated ? (
            <Link to="/post">"Write a post"</Link>
          ) : (
            "Login to right a post"
          )}
          <span className="logo--google">
            <img src={Arrowdown} alt="" className="do__fig--photo" />
          </span>
        </button>
        <button className="button social-button-facebook color-blue">
          <span className="logo--google">
            <img src={Groupicon} alt="" className="do__fig--photo" />
          </span>
          join group
        </button>
        <select className="button no-margin social-button-facebook">
          <option>Filter:All</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;

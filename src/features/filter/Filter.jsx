import "./filter.scss";
import Arrowdown from "../../assets/Vector.svg";
import Groupicon from "../../assets/Vectortwo.svg";
import "../../ui/button.scss";

function Filter() {
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
          Write a post
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
        <select className="button social-button-facebook">
          <option>Filter:All</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;

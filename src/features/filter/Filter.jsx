import "./filter.scss";
import Arrowdown from "../../assets/Vector.svg";
import Groupicon from "../../assets/Vectortwo.svg";
import "../../ui/button.scss";
import { useUser } from "../authentication/useUser";
import { Link } from "react-router-dom";
import FilterComponent from "./FilterComponent";

function Filter() {
  const { isAuthenticated } = useUser();

  return (
    <div className="filter">
      <div className="filter__post">
        <div className="filter__post--list">
          <FilterComponent
            filterField="topic"
            options={[
              { value: "all", label: "All Post" },
              { value: "🗓️ Meetup", label: "Event" },
              { value: "✍️ Article", label: "Arcticle" },
              { value: "🔬️ Education", label: "Education" },
            ]}
          />
        </div>
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
          <FilterComponent
            filterField="topic"
            options={[
              { value: "all", label: "All Post" },
              { value: "🗓️ Meetup", label: "Event" },
              { value: "✍️ Article", label: "Arcticle" },
              { value: "🔬️ Education", label: "Education" },
            ]}
          />
        </select>
      </div>
    </div>
  );
}

export default Filter;

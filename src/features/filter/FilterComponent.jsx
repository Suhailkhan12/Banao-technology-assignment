import { useSearchParams } from "react-router-dom";
import "../../ui/button.scss";
import "./filter.scss";

function FilterComponent({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    // if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <>
      {options.map((option) => (
        <div
          className="filtermargin__desktop"
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </div>
      ))}
    </>
  );
}

export function FilterComponentMobile({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handlemobilechange(e) {
    searchParams.set(filterField, e.target.value);
    // if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <>
      <select
        className="button no-margin social-button-facebook"
        onChange={handlemobilechange}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            active={option.value === currentFilter}
            disabled={option.value === currentFilter}
          >
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default FilterComponent;

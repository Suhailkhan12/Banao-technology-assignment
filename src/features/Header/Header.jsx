import { FaSearch } from "react-icons/fa";
import Logo from "../../assets/whole.svg";
import "./header.scss";
import UserAvatar from "../authentication/UserAvatar";
import Logout from "../authentication/Logout";
import { useUser } from "../authentication/useUser";

import NewUsers from "../../Pages/NewUsers";

function Header() {
  const { isAuthenticated } = useUser();

  return (
    <header className="header">
      <img src={Logo} alt="trillo logo" className="logo" />

      <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search hotels"
        />
        <button className="search__button">
          <FaSearch />
        </button>
      </form>

      <nav className="user-nav">
        <div className="user-nav__user">
          {!isAuthenticated ? (
            <>
              Create a account &nbsp;
              <NewUsers name="It's free" />
            </>
          ) : (
            <>
              <UserAvatar />
              <Logout />
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;

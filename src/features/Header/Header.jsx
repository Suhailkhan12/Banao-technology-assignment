import { FaSearch } from "react-icons/fa";
import Logo from "../../assets/whole.svg";
import "./header.scss";
import UserAvatar from "../authentication/UserAvatar";
import Logout from "../authentication/Logout";
import { useUser } from "../authentication/useUser";
import { Link } from "react-router-dom";

function Header() {
  const { isLoading, isAuthenticated } = useUser();

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
              Create a account &nbsp;<Link to="/login">It's free</Link>
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

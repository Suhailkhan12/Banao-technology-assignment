import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import "../../Pages/login.scss";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <button className="btnlogout" disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : "Loggingout"}
    </button>
  );
}

export default Logout;

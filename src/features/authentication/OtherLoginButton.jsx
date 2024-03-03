import GoogleLogo from "../../assets/google.svg";
import FacebookLogo from "../../assets/facebook.svg";
import "../../ui/button.scss";
import { useLogin } from "./useLogin";

function OtherLoginButton() {
  const { isLoading } = useLogin();
  return (
    <>
      <button className="button social-button-facebook" disabled={isLoading}>
        <span className="logo--google">
          <img src={FacebookLogo} alt="" className="do__fig--photo" />
        </span>
        {!isLoading ? "Sign In with facebook" : "Loading...."}
      </button>
      <button className="button social-button-google" disabled={isLoading}>
        <span className="logo--google">
          <img src={GoogleLogo} alt="" className="do__fig--photo" />
        </span>
        {!isLoading ? "Sign In with Google" : "Loading...."}
      </button>
    </>
  );
}

export default OtherLoginButton;

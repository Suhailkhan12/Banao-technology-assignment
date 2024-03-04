import { useState } from "react";
import "../../ui/input.scss";
import "../../ui/button.scss";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import "./loginform.scss";
import ImageLogin from "../../assets/Group3.svg";
import OtherLoginButton from "./OtherLoginButton";
import NewUsers from "../../Pages/NewUsers";

function LoginForm() {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("TestUser123");
  const { isLoading, login } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <>
      <div className="loginlayoutone">
        <div className="loginlayoutone__display1">
          <span className="new">
            Let's learn, share & inspire each other with our passion for
            computer engineering.&nbsp;
            <NewUsers name="Sign up now 🤘🏼" />
          </span>
        </div>
        <div className="loginlayoutone__display2">
          <h3 className="heading-4 mb-sm">Sign In</h3>
          <form onSubmit={handleSubmit}>
            <FormRowVertical>
              <input
                className="input"
                type="email"
                id="email"
                placeholder="Email"
                autoComplete="username"
                disabled={isLoading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormRowVertical>
            <FormRowVertical>
              <input
                className="input"
                type="password"
                id="password"
                autoComplete="current-password"
                disabled={isLoading}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormRowVertical>
            <FormRowVertical>
              <button className="button primary-button" disabled={isLoading}>
                {!isLoading ? "Sign In" : "Loading...."}
              </button>
            </FormRowVertical>
          </form>
          <OtherLoginButton />
        </div>
        <div className="loginlayoutone__display3">
          <div className="new">
            Don’t have an account yet? &nbsp;{" "}
            <NewUsers name="Create new for free!" />
          </div>
          <img src={ImageLogin} alt="" className="do__fig--photo" />
        </div>
      </div>
    </>
  );
}

export default LoginForm;

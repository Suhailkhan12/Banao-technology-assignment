import { useForm } from "react-hook-form";
import "../../ui/button.scss";
import FormRowVertical from "../../ui/FormRowVertical";
import "../../ui/input.scss";
import { useSignup } from "./useSignup";
import "./loginform.scss";
import ImageLogin from "../../assets/Group3.svg";
import OtherLoginButton from "./OtherLoginButton";
import { Link } from "react-router-dom";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { isLoading, signup } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    // console.log(data);
    const { fullName, email, password } = data;
    signup(
      { fullName, email, password },
      {
        onSettled: reset,
      }
    );
  }

  function onError() {
    console.log(errors);
  }

  return (
    <>
      <div className="loginlayoutone">
        <div className="loginlayoutone__display1">
          <span>
            Have a Account <Link to="/login">Log In Here 🤘🏼</Link>
          </span>
        </div>
        <div className="loginlayoutone__display2">
          <h3 className="heading-3 mb-sm">Create Account</h3>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <FormRowVertical error={errors?.fullName?.message}>
              <input
                className="input"
                placeholder="fullname"
                type="text"
                id="fullName"
                disabled={isLoading}
                {...register("fullName", {
                  required: "This field Required",
                })}
              />
            </FormRowVertical>

            <FormRowVertical error={errors?.email?.message}>
              <input
                placeholder="Email"
                className="input"
                type="email"
                id="email"
                disabled={isLoading}
                {...register("email", {
                  required: "This field Required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please provide a valid Email",
                  },
                })}
              />
            </FormRowVertical>

            <FormRowVertical error={errors?.password?.message}>
              <input
                placeholder="Password (min 8 characters)"
                className="input"
                type="password"
                id="password"
                disabled={isLoading}
                {...register("password", {
                  required: "This field Required",
                  minLength: {
                    value: 8,
                    message: "Password need a minimum of 8 character",
                  },
                })}
              />
            </FormRowVertical>

            <FormRowVertical error={errors?.passwordConfirm?.message}>
              <input
                placeholder="Repeat password"
                className="input"
                type="password"
                id="passwordConfirm"
                disabled={isLoading}
                {...register("passwordConfirm", {
                  required: "This field Required",
                  validate: (value) =>
                    value === getValues().password || "Password need to match",
                })}
              />
            </FormRowVertical>

            <FormRowVertical>
              <button className="button primary-button" disabled={isLoading}>
                {!isLoading ? "Create Account" : "Loading...."}
              </button>
            </FormRowVertical>
          </form>
          <OtherLoginButton />
        </div>
        <div className="loginlayoutone__display3">
          <div>Don’t have an account yet? Create new for free!</div>
          <img src={ImageLogin} alt="" className="do__fig--photo" />
        </div>
      </div>
    </>
  );
}

export default SignupForm;

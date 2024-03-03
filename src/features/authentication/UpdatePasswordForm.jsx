import { useForm } from "react-hook-form";
import "../../ui/Button.scss";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import "../../ui/input.scss";

import useUpdateUser from "./useUpdateUser";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { isUpdating, updateUser } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <input
          className="input"
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <input
          className="input"
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </FormRow>
      <FormRow>
        <button
          className="button button__size--medium button__variation--secondary"
          onClick={reset}
          type="reset"
        >
          Cancel
        </button>
        <button
          className="button button__size--medium button__variation--primary"
          disabled={isUpdating}
        >
          Update password
        </button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;

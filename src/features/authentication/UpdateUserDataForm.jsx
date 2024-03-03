import { useState } from "react";
import "../../ui/Button.scss";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import "../../ui/input.scss";

import { useUser } from "./useUser";
import useUpdateUser from "./useUpdateUser";

function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { isUpdating, updateUser } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!fullName) return;

    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <input className="input" value={email} disabled />
      </FormRow>
      <FormRow label="Full name">
        <input
          className="input"
          disabled={isUpdating}
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
        />
      </FormRow>
      <FormRow label="Avatar image">
        <input
          type="file"
          className="fileinput"
          disabled={isUpdating}
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </FormRow>
      <FormRow>
        <button
          className="button button__size--medium button__variation--secondary"
          type="reset"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="button button__size--medium button__variation--primary"
          disabled={isUpdating}
        >
          Update account
        </button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;

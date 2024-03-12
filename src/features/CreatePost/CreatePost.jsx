import { useForm } from "react-hook-form";
import "../../ui/input.scss";
import "../../ui/fileinput.scss";
import "../../ui/button.scss";
import FormRow from "../../ui/FormRow";
import "./createpost.scss";
import { useUser } from "../authentication/useUser";
import useCreatePost from "./useCreatePost";

function CreatePost() {
  const { user } = useUser();
  const { isCreating, CreatePostNew } = useCreatePost();
  const { register, handleSubmit, reset, formState } = useForm();

  if (!user) return null;

  const { id } = user.identities[0];

  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
    const image = typeof data.image === "string" ? data.image : data.image[0];

    CreatePostNew(
      { ...data, image: image },
      {
        onSuccess: (data) => {
          reset();
        },
      }
    );
  }

  //Need to pass a Error fn in handle submit to show error from formState
  function onError(error) {
    // console.log(error);
  }

  // input id name have to be same as a supabase data

  return (
    <form className="createpost" onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Title" error={errors?.title?.message}>
        <input
          className="input"
          type="text"
          id="title"
          placeholder="Title"
          {...register("title", {
            required: "This field required",
          })}
        />
      </FormRow>

      <FormRow label="Topic" error={errors?.topic?.message}>
        <select
          className="input"
          type="text"
          id="topic"
          {...register("topic", {
            required: "This field required",
          })}
        >
          <option value="✍️ Article">✍️ Article</option>
          <option value="🔬️ Education">🔬️ Education</option>
          <option value="🗓️ Meetup">🗓️ Meetup</option>
          <option value="💼️ Job">💼️ Job</option>
        </select>
      </FormRow>

      <FormRow label="Description of Post" error={errors?.description?.message}>
        <textarea
          className="textareas"
          type="number"
          id="description"
          defaultValue=""
          placeholder="Write something about your post"
          {...register("description", {
            required: "this field is required",
          })}
        />
      </FormRow>

      <FormRow label="Post Image">
        <input
          className="inputfile"
          type="file"
          id="image"
          accept="image/*"
          {...register("image", {
            required: "this field is required",
          })}
        />
      </FormRow>

      <input
        type="hidden"
        id="userid"
        value={id}
        {...register("userid", {
          required: "this field is required",
        })}
      />

      <FormRow>
        <button className="button primary-button" disabled={isCreating}>
          Create a Post
        </button>
      </FormRow>
    </form>
  );
}

export default CreatePost;
